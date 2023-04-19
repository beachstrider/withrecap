import {
  ConversationStore,
  GoogleIdentityAuthProvider,
  GoogleCalendar,
  Meeting,
  MeetingStore,
  UserAddonStore,
  UserMeetingStore
} from '@recap/shared'

import { ExtensionMessages, MeetingMessage, MeetingMetadata } from '../common/models'

const google = new GoogleIdentityAuthProvider()

class ChromeBackgroundService {
  private meetingStore: MeetingStore
  private conversationStore: ConversationStore

  constructor() {
    this.meetingStore = new MeetingStore()
    this.conversationStore = new ConversationStore()
  }

  private async getMeetingDetails(meetingId: string): Promise<Meeting | undefined> {
    await google.login({ silent: true })

    if (!google.accessToken) {
      throw Error('an error must have occurred while authenticating, no access token could be fetched')
    }

    const calendar = new GoogleCalendar(google.accessToken)
    const meetingDetails = await calendar.getMeetingDetails(meetingId)

    if (!meetingDetails) {
      console.warn('no calendar event could be found for the current meeting, skipping...')
      return
    }

    return meetingDetails
  }

  startListener(): void {
    chrome.tabs.onRemoved.addListener(async (tid, _removeInfo) => {
      const { tabId, meetingDetails } = await chrome.storage.local.get(['tabId', 'meetingDetails'])

      if (tid === tabId) {
        console.debug(`meeting ended since tab (${tid}) was closed.`)
        await this.processMeetingEnd(meetingDetails.mid)
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
          this.processTranscriptionMessage(request.meetingId, request.message).then(sendResponse)
          break
        case ExtensionMessages.MeetingMetadata:
          this.processMeetingMetadata(request.meetingId, request.metadata).then(sendResponse)
          break
        case ExtensionMessages.MeetingStarted:
          this.processMeetingStart(request.meetingId, request.metadata, sender.tab!.id!).then(sendResponse)
          break
        case ExtensionMessages.MeetingEnded:
          this.processMeetingEnd(request.meetingId).then(sendResponse)
          break
        case ExtensionMessages.MeetingState:
          this.processMeetingState().then(sendResponse)
          break
        case ExtensionMessages.AddonSupported:
          this.processAddonEnabled(request.addonId).then(sendResponse)
          break
      }

      // To tell the listener that we are async
      return true
    })
  }

  async processAddonEnabled(addonId: string): Promise<boolean> {
    return new Promise((resolve) => {
      chrome.tabs.query({ active: true, lastFocusedWindow: true }).then(async (tabs) => {
        if (!tabs || tabs.length === 0) {
          return resolve(false)
        }

        if (!google.auth.currentUser) {
          return resolve(false)
        }

        const userAddonStore = new UserAddonStore(google.auth.currentUser.uid)
        const addon = await userAddonStore.get(addonId)

        return resolve(!!addon)
      })
    })
  }

  async processMeetingState(): Promise<any> {
    const { recording, meetingDetails } = await chrome.storage.local.get(['recording', 'meetingDetails'])

    return {
      recording,
      meetingDetails
    }
  }

  async processTranscriptionMessage(meetingId: string, message: MeetingMessage): Promise<void> {
    if (message.speaker === 'You' && google.auth.currentUser) {
      message.speaker = google.auth.currentUser.displayName || google.auth.currentUser.email || 'Unknown'
    }

    return this.conversationStore.add(meetingId, message)
  }

  async processMeetingStart(meetingId: string, _metadata: MeetingMetadata, tabId: number): Promise<void> {
    await chrome.storage.local.set({ tabId })

    const meetingDetails = await this.getMeetingDetails(meetingId)
    if (!meetingDetails) {
      return this.meetingStore.delete(meetingId)
    }

    if (!(await this.meetingStore.exists(meetingId))) {
      await this.meetingStore.create(meetingId, meetingDetails)
    } else {
      // In case the user rejoins the meeting after leaving
      await this.meetingStore.update(meetingId, { ended: false })
    }

    const userMeetingStore = new UserMeetingStore(google.auth.currentUser!.uid)
    if (!(await userMeetingStore.exists(meetingId))) {
      await userMeetingStore.create(meetingId)
    }

    await chrome.storage.local.set({ recording: true, meetingDetails })
  }

  async processMeetingEnd(meetingId: string) {
    await chrome.storage.local.remove(['recording', 'meetingDetails', 'tabId'])

    await this.meetingStore.update(meetingId, { ended: true })
  }

  async processMeetingMetadata(_meetingId: string, _metadata: MeetingMetadata) {}
}

const backgroundService = new ChromeBackgroundService()
backgroundService.startListener()

// Opens option page the first time the extension gets installed
chrome.runtime.onInstalled.addListener((object) => {
  if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    chrome.runtime.openOptionsPage()
  }
})

console.log('Background service started')
