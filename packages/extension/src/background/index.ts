import {
  Conversation,
  GoogleCalendar,
  GoogleIdentityAuthProvider,
  initSentry,
  Meeting,
  MeetingStore,
  Message,
  RequestTypes,
  sanitize,
  UserAddonStore
} from '@recap/shared'
import * as Sentry from '@sentry/browser'
import { deleteField, Unsubscribe } from 'firebase/firestore'

import { ExtensionMessages } from '../common'

class ChromeBackgroundService {
  private meetingStore: MeetingStore
  private google: GoogleIdentityAuthProvider
  private conversation: Conversation
  private unsubscribe: null | Unsubscribe = null
  private recording = true

  constructor() {
    this.meetingStore = new MeetingStore()
    this.google = new GoogleIdentityAuthProvider()
    this.conversation = []

    this.google.onAuthStateChanged(() => true)
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
          case ExtensionMessages.MeetingMessage:
            this.processTranscriptionMessage(request.meetingId, request.message)
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
          case ExtensionMessages.AddonEnabled:
            this.processAddonEnabled(request.addonId)
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
                .then(() => sendResponse({ err: null }))
                .catch((err) => {
                  this.handleError(err)
                  sendResponse({ err })
                })
              break
            case RequestTypes.LOGOUT:
              this.logout()
                .then(() => sendResponse({ err: null }))
                .catch((err) => {
                  this.handleError(err)
                  sendResponse({ err })
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
        this.handleError(
          new Error('An error occurred while processing meeting ended on meeting tab closed', { cause: err })
        )
      }
    })
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
      throw new Error('An error occurred while extension logout', {
        cause: err
      })
    }
  }

  async processAddonEnabled(addonId: string): Promise<{ isEnabled: boolean }> {
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

            return resolve({ isEnabled: !!addon })
          } catch (err) {
            reject(
              new Error('An error occurred while fetching user addons', {
                cause: err
              })
            )
          }
        })
        .catch((err) => {
          reject(new Error("Couldn't query active tab information", { cause: err }))
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

  async processTranscriptionMessage(meetingId: string, message: Message): Promise<void> {
    try {
      if (message.speaker === 'You' && this.google.auth.currentUser) {
        message.speaker = this.google.auth.currentUser.displayName || this.google.auth.currentUser.email || 'Unknown'
      }

      this.conversation.push(message)

      return
    } catch (err) {
      throw new Error('An error occurred while processing new message', {
        cause: err
      })
    }
  }

  async processMeetingStart(meetingId: string, tabId: number): Promise<void> {
    this.recording = true
    await chrome.storage.session.set({ tabId })

    if (!this.google.auth.currentUser) {
      return console.debug('auth is null, processMeetingStart terminated')
    }

    const googleMeeting = await this.getMeetingDetails(meetingId)

    if (!googleMeeting) {
      return console.debug('googleMeeting is null, processMeetingStart terminated')
    }

    const email = this.google.auth.currentUser.email as string
    const meetingDetails: Meeting = { ...googleMeeting, recorders: [email], recorder: email }
    const meeting = await this.meetingStore.get(meetingId)

    try {
      // HACK: handle case that processMeetingEnd is triggered before ending processMeetingStart
      // EX; when a user exits right after its joining
      if (this.recording) {
        // In case the user joins the meeting that is already being recorded
        if (meeting) {
          // Add user email only if it's not included in recorders already,
          // Otherwise, set it one
          const recorders = Array.isArray(meeting.recorders)
            ? meeting.recorders.includes(email)
              ? meeting.recorders
              : [...meeting.recorders, email]
            : [email]

          // Set this user as a recorder if no one is recording
          const recorder = !meeting.recorder ? email : meeting.recorder

          await this.meetingStore.update(meetingId, { recorders, recorder })
        }
        // In case the user joins the first
        else {
          await this.meetingStore.create(meetingId, meetingDetails)
        }

        await chrome.storage.session.set({ recording: true, meetingDetails })

        this.unsubscribe = this.meetingStore.subscribe(meetingId, async (meeting) => {
          if (meeting) {
            meeting.recorders = Array.isArray(meeting.recorders) ? meeting.recorders : []

            if (!meeting.recorder) {
              if (meeting.recorders[0] === email) {
                // Set this user as a recorder if no one is recording and this user is index 1 in recorders
                // TODO: confirm recorders[0] is always available to record
                this.conversation = []

                console.debug('recorder changed to', email)
                await this.meetingStore.update(meetingId, { recorder: email })
              }
            }
          }
        })
      } else {
        console.debug('processMeetingStart terminated due to earlier end of meeting')
      }
    } catch (err) {
      throw new Error('An error occurred while trying to store meeting information', { cause: err })
    }
  }

  async processMeetingEnd(meetingId: string) {
    this.recording = false
    await chrome.storage.session.remove(['recording', 'meetingDetails', 'tabId', 'error'])

    try {
      const meeting = await this.meetingStore.get(meetingId)

      if (!meeting) {
        return
      }

      const email = this.google.auth.currentUser?.email

      // Exclude this user in recorders array
      const filteredRecorders = Array.isArray(meeting.recorders)
        ? meeting.recorders.length > 1
          ? meeting.recorders.filter((recorder) => recorder !== email)
          : []
        : // NOTE: length === 1 means the remaining recorder is this user
          //       if the remaining recorder is not this user, this is an exception like while recorders is not yet updated
          []
      // Delete a field 'recorders' itself if it is empty
      const recorders = filteredRecorders.length > 0 ? filteredRecorders : deleteField()

      // Store a conversation if this user has been a recorder
      if (meeting.recorder === email) {
        const recorder = deleteField()

        const sanitized = sanitize(this.conversation)
        console.debug(`sanitized transcription is generated`, sanitized)

        // Set a conversation if no old recorded conversation, otherwise attach it to the existing one
        const conversation = meeting.conversation ? [...meeting.conversation, ...sanitized] : sanitized

        await this.meetingStore.update(meetingId, { conversation, recorders, recorder })
      }
      // Otherwise, just exclude itself in recorders
      else {
        await this.meetingStore.update(meetingId, { recorders })
      }
    } catch (err) {
      throw new Error('An error occurred while updating meeting on meeting ended', { cause: err })
    } finally {
      this.conversation = []
      this.unsubscribe?.()
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
      url: `${process.env.RECAP_APP_BASE_URL}/onboarding/register`
    })
  }
})

console.debug('Background service started')
