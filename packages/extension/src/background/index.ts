import * as Sentry from '@sentry/browser'
import { isEmpty } from 'lodash'

import {
  ConversationStore,
  GoogleCalendar,
  GoogleIdentityAuthProvider,
  Meeting,
  MeetingStore,
  Message,
  PresencesRTDB,
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
  private presencesRTDB: PresencesRTDB
  private meeting: Meeting | undefined
  private messages: Message[] = []
  private previousSpeaker = ''

  private isStarted = false
  private isRecorder = false

  constructor() {
    this.google = new GoogleIdentityAuthProvider()
    this.meetingStore = new MeetingStore()
    this.conversationStore = new ConversationStore()
    this.presencesRTDB = new PresencesRTDB()

    this.google.onAuthStateChanged(() => true)
  }

  public startListener(): void {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      return Sentry.wrap(() => {
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
            this.processMessage(request.meetingId, request.message)
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
            this.processMeetingEnd(request.meetingId, request.email)
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

    // TODO: this not work!
    chrome.tabs.onRemoved.addListener(async (tid, _removeInfo) => {
      const { tabId, meetingDetails } = await chrome.storage.session.get(['tabId', 'meetingDetails'])

      if (tabId!! && !isEmpty(meetingDetails) && meetingDetails.mid!! && tid === tabId) {
        await this.processMeetingEnd(meetingDetails?.mid, this.google.auth.currentUser?.email!)
        console.debug(`-> meeting ended since tab (${tid}) was closed.`)
      }
    })
  }

  private async getMeetingDetails(meetingId: string): Promise<Meeting | undefined> {
    // Get a new identity token whenever joining a meeting as the token expires in 1hr.
    const identityToken = await this.google.refreshIdentityToken()

    const calendar = new GoogleCalendar(identityToken)
    const meetingDetails = await calendar.getMeetingDetails(meetingId)

    return meetingDetails
  }

  private async handleError(error: unknown): Promise<void> {
    console.error(error)
    Sentry.captureException(error)

    return chrome.storage.session.set({ error })
  }

  private async login(token: string): Promise<void> {
    await this.google.login(token)
  }

  private async logout(): Promise<void> {
    await this.google.logout()
  }

  private async iAmRecording(meetingId: string, email: string) {
    console.debug('-> I am recording')
    this.isRecorder = true
    await this.presencesRTDB?.activate(meetingId, email)
  }

  private async saveMessages(meetingId: string): Promise<void> {
    if (this.messages.length && this.isRecorder) {
      try {
        const messages = sanitize(this.messages)
        console.debug(messages.map((message) => `${message.speaker}: ${message.text}`).join('\n'))
        await this.conversationStore.add(meetingId, messages)
      } catch (err) {
        throw new Error('An error occurred while storing new message')
      }
      this.messages = []
    }
  }

  private async processMeetingUserInfo(
    addonId: string
  ): Promise<{ displayName: string; email: string; isEnabled: boolean } | { error: string }> {
    const tabs = await chrome.tabs.query({ active: true, lastFocusedWindow: true })

    if (isEmpty(tabs)) {
      return { error: 'active tab not found' }
    }

    if (!this.google.auth.currentUser) {
      return { error: 'unauthenticated user' }
    }

    const userAddonStore = new UserAddonStore(this.google.auth.currentUser.uid)
    const addon = await userAddonStore.get(addonId)

    return {
      email: this.google.auth.currentUser.email || '',
      displayName: this.google.auth.currentUser.displayName || '',
      isEnabled: !!addon
    }
  }

  private async processMeetingState(): Promise<{
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

  private async processMeetingStart(meetingId: string, tabId: number): Promise<void> {
    console.debug('-> process starting')

    this.isStarted = true

    await chrome.storage.session.set({ tabId })

    const meetingDetails = await this.getMeetingDetails(meetingId)

    if (!this.google.auth.currentUser) {
      return console.debug(`-> unauthenticated user, skipping...`)
    }

    if (!meetingDetails) {
      return console.debug('-> no calendar event could be found for the current meeting, skipping...')
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
        } else {
          await this.meetingStore.update(meetingId, { processed: false })
        }

        await chrome.storage.session.set({ recording: true, meetingDetails })

        console.debug('-> joining a meeting')

        this.presencesRTDB.subscribe(meetingId, email, async (isRecorder) => {
          if (!isRecorder) {
            console.debug('-> I am NOT recording')
            this.isRecorder = false
          }
        })
      } else {
        console.debug('-> processMeetingStart terminated due to earlier end of meeting')
      }
    } catch (err) {
      throw new Error('An error occurred while trying to store meeting information')
    }
  }

  private async processMessage(meetingId: string, message: Message): Promise<void> {
    // If speaker changed
    if (this.previousSpeaker !== message.speaker) {
      // If I have just been a recorder
      if (message.email === this.google.auth.currentUser!.email) {
        await this.iAmRecording(meetingId, message.email)
      }

      // If messages are not empty AND I am a recorder
      await this.saveMessages(meetingId)
    }

    if (this.isRecorder) {
      this.messages.push(message)
    }
    this.previousSpeaker = message.speaker
  }

  private async processMeetingEnd(meetingId: string, email: string) {
    console.debug('-> process ending')

    await this.saveMessages(meetingId)

    await chrome.storage.session.remove(['recording', 'meetingDetails', 'tabId', 'error'])

    this.isStarted = false
    this.messages = []
    this.previousSpeaker = ''
    this.isRecorder = false

    try {
      console.debug('-> leaving a meeting')

      await this.presencesRTDB?.delete(meetingId, email)
    } catch (err) {
      console.error(err)
      throw new Error('An error occurred while updating meeting on meeting ended')
    } finally {
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

console.debug('-> Background service started')
