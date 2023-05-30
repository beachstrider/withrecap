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

import { ExtensionMessages } from '../common'

class ChromeBackgroundService {
  private meetingStore: MeetingStore
  private google: GoogleIdentityAuthProvider
  private conversation: Conversation

  constructor() {
    this.meetingStore = new MeetingStore()
    this.google = new GoogleIdentityAuthProvider()
    this.conversation = []
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
    await chrome.storage.session.set({ tabId })

    const meetingDetails = await this.getMeetingDetails(meetingId)
    if (!meetingDetails) {
      return this.meetingStore.delete(meetingId)
    }

    try {
      if (!(await this.meetingStore.exists(meetingId))) {
        await this.meetingStore.create(meetingId, meetingDetails)
      } else {
        // In case the user rejoins the meeting after leaving
        await this.meetingStore.update(meetingId, { ended: false })
      }

      await chrome.storage.session.set({ recording: true, meetingDetails })
    } catch (err) {
      throw new Error('An error occurred while trying to store meeting information', { cause: err })
    }
  }

  async processMeetingEnd(meetingId: string) {
    await chrome.storage.session.remove(['recording', 'meetingDetails', 'tabId', 'error'])

    try {
      const conversation = sanitize(this.conversation, 0.8)
      console.debug(`transcription is generated and sanitized: ${conversation}`)

      await this.meetingStore.update(meetingId, { conversation, ended: true })
    } catch (err) {
      throw new Error('An error occurred while updating meeting on meeting ended', { cause: err })
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
      url: `${process.env.RECAP_APP_BASE_URL}/onboarding/register`
    })
  }
})

console.debug('Background service started')
