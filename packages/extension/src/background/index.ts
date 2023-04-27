import {
  ConversationStore,
  GoogleCalendar,
  GoogleIdentityAuthProvider,
  Meeting,
  MeetingStore,
  Message,
  UserAddonStore
} from '@recap/shared'

import { ExtensionMessages } from '../common'

class ChromeBackgroundService {
  private meetingStore: MeetingStore
  private conversationStore: ConversationStore
  private google: GoogleIdentityAuthProvider

  constructor() {
    this.meetingStore = new MeetingStore()
    this.conversationStore = new ConversationStore()
    this.google = new GoogleIdentityAuthProvider()
  }

  private async getMeetingDetails(meetingId: string): Promise<Meeting | undefined> {
    await this.google.login({ silent: true })

    if (!this.google.accessToken) {
      throw Error('an error must have occurred while authenticating, no access token could be fetched')
    }

    const calendar = new GoogleCalendar(this.google.accessToken)
    const meetingDetails = await calendar.getMeetingDetails(meetingId)

    if (!meetingDetails) {
      console.warn('no calendar event could be found for the current meeting, skipping...')
      return
    }

    return meetingDetails
  }

  private async handleError(error: unknown): Promise<void> {
    console.error(error)
    // TODO: Remove once we have better tooling like Sentry
    console.trace(error)

    return chrome.storage.session.set({ error })
  }

  startListener(): void {
    chrome.tabs.onRemoved.addListener(async (tid, _removeInfo) => {
      try {
        const { tabId, meetingDetails } = await chrome.storage.session.get(['tabId', 'meetingDetails'])

        if (tid === tabId) {
          console.debug(`meeting ended since tab (${tid}) was closed.`)
          await this.processMeetingEnd(meetingDetails.mid)
        }
      } catch (err) {
        this.handleError(`An error occurred while processing meeting ended event: ${err}`)
      }
    })

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.debug(
        sender.tab
          ? `messaged received from a content script: ${sender.tab.url}`
          : 'messaged received from the extension',
        request
      )

      switch (request.type) {
        case ExtensionMessages.MeetingMessage:
          this.processTranscriptionMessage(request.meetingId, request.message)
            .then(sendResponse)
            .catch((err) => {
              this.handleError(err)
              sendResponse({ error: err })
            })
          break
        case ExtensionMessages.MeetingStarted:
          this.processMeetingStart(request.meetingId, sender.tab!.id!)
            .then(sendResponse)
            .catch((err) => {
              this.handleError(err)
              sendResponse({ error: err })
            })
          break
        case ExtensionMessages.MeetingEnded:
          this.processMeetingEnd(request.meetingId)
            .then(sendResponse)
            .catch((err) => {
              this.handleError(err)
              sendResponse({ error: err })
            })
          break
        case ExtensionMessages.MeetingState:
          this.processMeetingState()
            .then(sendResponse)
            .catch((err) => {
              this.handleError(err)
              sendResponse({ error: err })
            })
          break
        case ExtensionMessages.AddonSupported:
          this.processAddonEnabled(request.addonId)
            .then(sendResponse)
            .catch((err) => {
              this.handleError(err)
              sendResponse({ error: err })
            })
          break
      }

      // To tell the listener that we are async
      return true
    })
  }

  async processAddonEnabled(addonId: string): Promise<{ isEnabled: boolean }> {
    return new Promise((resolve, reject) => {
      chrome.tabs
        .query({ active: true, lastFocusedWindow: true })
        .then(async (tabs) => {
          if (!tabs || tabs.length === 0) {
            return reject('active tab not found')
          }

          if (!this.google.auth.currentUser) {
            return reject('user is unauthenticated')
          }

          try {
            const userAddonStore = new UserAddonStore(this.google.auth.currentUser.uid)
            const addon = await userAddonStore.get(addonId)

            return resolve({ isEnabled: !!addon })
          } catch (err) {
            reject(`An error occurred while fetching user addons: ${err}`)
          }
        })
        .catch((err) => {
          reject(`Couldn't query active tab information: ${err}`)
        })
    })
  }

  async processMeetingState(): Promise<{ recording: boolean; meetingDetails: Meeting; error: unknown }> {
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
    if (message.speaker === 'You' && this.google.auth.currentUser) {
      message.speaker = this.google.auth.currentUser.displayName || this.google.auth.currentUser.email || 'Unknown'
    }

    return this.conversationStore.add(meetingId, message)
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
    } catch (err) {
      this.handleError(`An error occurred while trying to store meeting information: ${err}`)
    }

    await chrome.storage.session.set({ recording: true, meetingDetails })
  }

  async processMeetingEnd(meetingId: string) {
    await chrome.storage.session.remove(['recording', 'meetingDetails', 'tabId', 'error'])

    try {
      await this.meetingStore.update(meetingId, { ended: true })
    } catch (err) {
      this.handleError(`An error occurred while updating meeting on meeting ended: ${err}`)
    }
  }
}

const backgroundService = new ChromeBackgroundService()
backgroundService.startListener()

// Opens option page the first time the extension gets installed
chrome.runtime.onInstalled.addListener((object) => {
  if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.runtime.openOptionsPage()
  }
})

console.debug('Background service started')
