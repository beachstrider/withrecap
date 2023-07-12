import * as Sentry from '@sentry/browser'

import {
  Conversation,
  ConversationStore,
  GoogleCalendar,
  GoogleIdentityAuthProvider,
  Meeting,
  MeetingStore,
  Message,
  PresenceStore,
  RequestTypes,
  UserAddonStore,
  initSentry,
  sanitize
} from '@recap/shared'

import { ExtensionMessages } from '../common'

class ChromeBackgroundService {
  private google: GoogleIdentityAuthProvider
  private meetingStore: MeetingStore
  private conversationStore: ConversationStore
  private presence: PresenceStore | null = null
  private conversation: Conversation

  private meeting: Meeting | undefined

  private isStarted = false
  private isRecording = false

  constructor() {
    this.google = new GoogleIdentityAuthProvider()
    this.meetingStore = new MeetingStore()
    this.conversationStore = new ConversationStore()
    this.conversation = []

    this.google.onAuthStateChanged(() => true)
  }

  startListener(): void {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      return Sentry.wrap(() => {
        console.debug(
          sender.tab
            ? `messaged received from a content script: ${sender.tab.url}`
            : 'messaged received from the extension',
          request
        )

        switch (request.type) {
          case ExtensionMessages.MeetingUserInfo:
            this.processMeetingUserInfo(request.addonId)
              .then(sendResponse)
              .catch((error) => {
                this.handleError(error)
                sendResponse({ error })
              })
            break
          case ExtensionMessages.MeetingMessage:
            this.processTranscriptionMessage(request.meetingId, request.messages)
              .then(() => sendResponse({ error: null }))
              .catch((error) => {
                this.handleError(error)
                sendResponse({ error })
              })
            break
          case ExtensionMessages.MeetingStarted:
            this.processMeetingStart(request.meetingId, sender.tab!.id!)
              .then(() => sendResponse({ error: null }))
              .catch((error) => {
                this.handleError(error)
                sendResponse({ error })
              })
            break
          case ExtensionMessages.MeetingEnded:
            this.processMeetingEnd(request.meetingId)
              .then(() => sendResponse({ error: null }))
              .catch((error) => {
                this.handleError(error)
                sendResponse({ error })
              })
            break
          case ExtensionMessages.MeetingState:
            this.processMeetingState()
              .then(sendResponse)
              .catch((error) => {
                this.handleError(error)
                sendResponse({ error })
              })
            break
        }

        // To tell the listener that we are async
        return true
      })
    })

    chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
      return Sentry.wrap(() => {
        if (sender.tab) {
          console.debug(`messaged received from an app: ${sender.tab.url}`, request)

          switch (request.type) {
            case RequestTypes.LOGIN:
              this.login(request.token)
                .then(() => sendResponse({ error: null }))
                .catch((error) => {
                  this.handleError(error)
                  sendResponse({ error })
                })
              break
            case RequestTypes.LOGOUT:
              this.logout()
                .then(() => sendResponse({ error: null }))
                .catch((error) => {
                  this.handleError(error)
                  sendResponse({ error })
                })
              break
          }
        }

        return true
      })
    })

    chrome.tabs.onRemoved.addListener(async (tid, _removeInfo) => {
      try {
        const { tabId, meetingDetails } = await chrome.storage.session.get(['tabId', 'meetingDetails'])

        if (tid === tabId) {
          console.debug(`meeting ended since tab (${tid}) was closed.`)
          await this.processMeetingEnd(meetingDetails.mid)
        }
      } catch (err) {
        this.handleError(new Error('An error occurred while processing meeting ended on meeting tab closed'))
      }
    })
  }

  private async getMeetingDetails(meetingId: string): Promise<Meeting | undefined> {
    // Get a new identity token whenever joining a meeting as the token expires in 1hr.
    const identityToken = await this.google.refreshIdentityToken()

    const calendar = new GoogleCalendar(identityToken)
    const meetingDetails = await calendar.getMeetingDetails(meetingId)

    if (!meetingDetails) {
      console.warn('no calendar event could be found for the current meeting, skipping...')
      return
    }

    return meetingDetails
  }

  private async handleError(error: unknown): Promise<void> {
    console.error(error)
    Sentry.captureException(error)

    return chrome.storage.session.set({ error })
  }

  async login(token: string): Promise<void> {
    try {
      await this.google.login(token)
    } catch (err) {
      this.handleError(err)
    }
  }

  async logout(): Promise<void> {
    try {
      await this.google.logout()
    } catch (err) {
      throw new Error('An error occurred while extension logout')
    }
  }

  async processMeetingUserInfo(addonId: string): Promise<{ displayName: string; email: string; isEnabled: boolean }> {
    return new Promise((resolve, reject) => {
      chrome.tabs
        .query({ active: true, lastFocusedWindow: true })
        .then(async (tabs) => {
          if (!tabs || tabs.length === 0) {
            return reject(new Error('active tab not found'))
          }

          if (!this.google.auth.currentUser) {
            return reject('user is unauthenticated')
          }

          try {
            const userAddonStore = new UserAddonStore(this.google.auth.currentUser.uid)
            const addon = await userAddonStore.get(addonId)

            return resolve({
              email: this.google.auth.currentUser.email || '',
              displayName: this.google.auth.currentUser.displayName || '',
              isEnabled: !!addon
            })
          } catch (err) {
            reject(new Error('An error occurred while fetching user addons'))
          }
        })
        .catch((err) => {
          reject(new Error("Couldn't query active tab information"))
        })
    })
  }

  async processMeetingState(): Promise<{
    recording: boolean
    meetingDetails: Meeting
    error: unknown
  }> {
    const { recording, meetingDetails, error } = await chrome.storage.session.get([
      'recording',
      'meetingDetails',
      'error'
    ])

    // TODO: Detect meeting that ended long ago and clear the session storage

    return {
      recording,
      meetingDetails,
      error
    }
  }

  async processMeetingStart(meetingId: string, tabId: number): Promise<void> {
    console.debug('process starting')

    this.isStarted = true

    await chrome.storage.session.set({ tabId })

    const meetingDetails = await this.getMeetingDetails(meetingId)

    if (!this.google.auth.currentUser || !meetingDetails) {
      this.isRecording = false
      return console.debug('auth or googleMeet is null, processMeetingStart terminated')
    } else {
      this.isRecording = true
    }

    const email = this.google.auth.currentUser.email as string
    this.meeting = await this.meetingStore.get(meetingId)

    try {
      // HACK: handle case that processMeetingEnd is triggered before processMeetingStart ends
      // EX; when a user leaves right after its joining
      if (this.isStarted) {
        // In case the user joins the meeting the first
        if (!this.meeting) {
          await this.meetingStore.create(meetingId, meetingDetails)
        }

        await chrome.storage.session.set({ recording: true, meetingDetails })

        console.debug('joining a meeting')

        // TODO: ==========
        this.presence = new PresenceStore(meetingId, email)
        this.presence.monitor()
        this.presence.subscribe(async () => {
          console.debug('delegated as a recorder')
          this.conversation = []
        })
      } else {
        console.debug('processMeetingStart terminated due to earlier end of meeting')
      }
    } catch (err) {
      this.isRecording = false
      throw new Error('An error occurred while trying to store meeting information')
    }
  }

  async processTranscriptionMessage(meetingId: string, messages: Message[]): Promise<void> {
    console.debug(`---  messages:`, messages)
    try {
      await this.conversationStore.add(meetingId, messages)
    } catch (err) {
      throw new Error('An error occurred while storing new message')
    }
  }

  async processMeetingEnd(meetingId: string) {
    console.debug('process ending')

    this.isStarted = false

    await chrome.storage.session.remove(['recording', 'meetingDetails', 'tabId', 'error'])

    try {
      const meeting = await this.meetingStore.get(meetingId)

      if (!meeting || !this.isRecording || !this.google.auth.currentUser || !this.google.auth.currentUser.email) {
        return console.debug('something wrong while ending a meeting')
      }

      const email = this.google.auth.currentUser.email

      // Store a conversation if this user has been a recorder
      if (meeting.recorder === email) {
        const sanitized = sanitize(this.conversation)
        console.debug(`sanitized transcription is generated`, sanitized)

        // Set a conversation if no old recorded conversation, otherwise attach it to the existing one
        const conversation = meeting.conversation ? [...meeting.conversation, ...sanitized] : sanitized

        await this.meetingStore.update(meetingId, { conversation })
      }

      console.debug('leaving a meeting')

      this.presence?.disconnect()

      // TODO: ==========
    } catch (err) {
      console.error(err)
      throw new Error('An error occurred while updating meeting on meeting ended')
    } finally {
      this.conversation = []
    }
  }
}

// Note: hack for sentry to work inside the background script
// See: https://github.com/getsentry/sentry-javascript/issues/5289
;(Sentry.WINDOW.document as any) = {
  visibilityState: 'hidden',
  addEventListener: () => {}
}
initSentry('extension:background')

const backgroundService = new ChromeBackgroundService()
backgroundService.startListener()

// Navigate to app onboarding the first time the extension gets installed
chrome.runtime.onInstalled.addListener((object) => {
  if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.tabs.create({
      url: `http://${process.env.DOMAIN}/onboarding/register`
    })
  }
})

console.debug('Background service started')
