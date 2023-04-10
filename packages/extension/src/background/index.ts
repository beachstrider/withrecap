import { ConversationStore, GoogleAuth, GoogleCalendar, MeetingStore } from '@recap/shared'

import { ExtensionMessages, MeetingMessage, MeetingMetadata } from '../common/models'

class ChromeBackgroundService {
  private meetingStore: MeetingStore
  private conversationStore: ConversationStore
  private google: GoogleAuth

  constructor() {
    this.meetingStore = new MeetingStore()
    this.conversationStore = new ConversationStore()
    this.google = new GoogleAuth()
  }

  async startListener(): Promise<void> {
    // when tab is closed - make sure to end meeting - its possible the meeting was ended earlier but the TranscriptionService will handle it
    chrome.tabs.onRemoved.addListener((_tabId, _removeInfo) => {
      console.debug('meeting ended since tab was closed')
    })

    chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
      console.debug(sender.tab ? 'messaged received from a content script: ' + sender.tab.url : 'from the extension')

      switch (request.type) {
        case ExtensionMessages.MeetingMessage:
          await this.processTranscriptionMessage(request.meetingId, request.message)
          break
        case ExtensionMessages.MeetingMetadata:
          await this.processMeetingMetadata(request.meetingId, request.metadata)
          break
        case ExtensionMessages.MeetingStarted:
          await this.processMeetingStart(request.meetingId, request.metadata)
          break
        case ExtensionMessages.MeetingEnded:
          await this.processMeetingEnd(request.meetingId, request.metadata)
          break
        default:
          break
      }

      return sendResponse()
    })
  }

  async processTranscriptionMessage(meetingId: string, message: MeetingMessage): Promise<void> {
    if (message.speaker === 'You' && this.google.auth.currentUser) {
      // TODO: Find out if we can have something better here
      message.speaker = this.google.auth.currentUser.displayName || this.google.auth.currentUser.email || 'Unknown'
    }

    return this.conversationStore.add(meetingId, message)
  }

  async processMeetingStart(meetingId: string, _metadata: MeetingMetadata): Promise<void> {
    if (!(await this.meetingStore.exists(meetingId))) {
      // Create an empty meeting now, so that other users don't have to do it as well
      await this.meetingStore.create(meetingId, { mid: meetingId })

      await this.google.login({ silent: true })

      if (!this.google.accessToken) {
        return console.error('an error must have occurred while authenticating, no access token could be fetched')
      }

      const calendar = new GoogleCalendar(this.google.accessToken)
      const meetingDetails = await calendar.getMeetingDetails(meetingId)

      // TODO: Validate this
      if (!meetingDetails) {
        console.warn('no calendar event could be found for the current meeting, skipping...')
        return this.meetingStore.delete(meetingId)
      }

      await this.meetingStore.update(meetingId, { ...meetingDetails })
    }
  }

  async processMeetingEnd(_meetingId: string, _metadata: MeetingMetadata) {}

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
