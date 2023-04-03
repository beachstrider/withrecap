import { ExtensionMessages, MeetingMessage, MeetingMetadata } from '../common/models'
import { TranscriptionServiceImpl, TranscriptionService } from '../common/services/transcription'

interface BackgroundService {
  startListener(): void
}

class ChromeBackgroundService implements BackgroundService {
  transcriptionService: TranscriptionService
  constructor(transcriptionService: TranscriptionService) {
    this.transcriptionService = transcriptionService
  }
  startListener(): void {
    //listening to all messages
    let self = this
    //when tab is closed - make sure to end meeting - its possible the meeting was ended earlier but the TranscriptionService will handle it
    chrome.tabs.onRemoved.addListener(function (tabid, removed) {
      self.transcriptionService.endMeetingFromTabId(tabid)
    })

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
      console.log(sender.tab ? 'messaged received from a content script:' + sender.tab.url : 'from the extension')

      if (!sender.tab) {
        sendResponse()
        return
      }
      const tabId = sender.tab!.id!

      if (request.type === ExtensionMessages.MeetingMessage) {
        self.processTranscriptionMessage(request.meetingId, request.message)
      }
      if (request.type === ExtensionMessages.MeetingMetadata) {
        self.processMeetingMetadata(tabId, request.meetingId, request.metadata)
      }
      sendResponse()
    })
  }
  processTranscriptionMessage(meetingId: string, message: MeetingMessage) {
    this.transcriptionService.appendMessage(meetingId, message)
    console.log('current transcription for meeting: ')
    console.log(this.transcriptionService.getMeetingTranscription(meetingId))
  }
  processMeetingMetadata(tabId: number, meetingId: string, metadata: MeetingMetadata) {
    this.transcriptionService.updateMeetingMetadata(tabId, meetingId, metadata)
  }
}

//Our services catalog
const transcriptionService: TranscriptionService = new TranscriptionServiceImpl()

//Background service - later can distinguish browsers
const backgroundService: BackgroundService = new ChromeBackgroundService(transcriptionService)
backgroundService.startListener()
console.log('Background service started')

chrome.runtime.onInstalled.addListener((object) => {
  if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
    let internalUrl = chrome.runtime.getURL('onboarding.html')
    chrome.tabs.create({ url: internalUrl }, (_tab) => {
      console.log(`New tab launched with ${internalUrl}`)
    })
  }
})
