import { ExtensionMessages, MeetingMetadata, MeetingMessage } from '../common/models'

interface MeetingService {
  isOnCall(): boolean
  prepareListener(): void
  startTranscribing(): void
}

class GoogleMeetsService implements MeetingService {
  callBar: Element | null = null
  meetingStartTimestamp?: number

  SELECTOR_CALL_BAR = "div[jscontroller='kAPMuc']"
  SELECTOR_CC_DIV = '.a4cQT'
  SELECTOR_CC_BUTTON = "button[jscontroller='xzbRj']"
  SELECTOR_LANGUAGE = "span[jsname='V67aGc']"
  SELECTOR_SPEAKER = "div[class='zs7s8d jxFHg']"
  SELECTOR_TEXT = "div[jsname='YSxPC']"
  SELECTOR_TITLE = "div[jscontroller='yEvoid']"
  SELECTOR_PARTICIPANTS = "div[jscontroller='SKibOb']"
  SELECTOR_END_CALL = "div[jscontroller='m1IMT']"

  isOnCall(): boolean {
    return this.meetingStartTimestamp ? true : false
  }

  getMeetingTitle(): string {
    let divTitle = document.querySelector(this.SELECTOR_TITLE) as HTMLElement
    return divTitle?.textContent ?? ''
  }

  getMeetingId(): string {
    return window.location.pathname.slice(1)
  }

  prepareListener(): void {
    const docObserver = new MutationObserver(() => {
      //if call bar is available - means the call started
      this.callBar = document.body.querySelector(this.SELECTOR_CALL_BAR)
      if (this.callBar) {
        //remove observer
        docObserver.disconnect()
        //start transcription
        console.log('call started')
        this.meetingStartTimestamp = new Date().getTime()
        //setting timeout or else we dont find the cc button to click
        setTimeout(() => {
          //this will also be useful even if you rejoin a meeting
          //for example the meeting was ended through tab close, but then you joined again - this will nullify the metadata's endTimestamp
          this.updateMeetingMetadata()
          //click on the cc button and start transcribing
          this.startTranscribing()
        }, 800)
      }
    })

    docObserver.observe(document.body, {
      childList: true,
      subtree: true
    })
  }

  updateMeetingMetadata(endCall: boolean = false): void {
    const nbParticipants = document.querySelector(this.SELECTOR_PARTICIPANTS)?.textContent
    console.log(`Number of participants: ${nbParticipants}`)
    if (!this.meetingStartTimestamp) {
      this.meetingStartTimestamp = new Date().getTime()
    }

    const metadata: MeetingMetadata = {
      title: this.getMeetingTitle(),
      nbParticipants: nbParticipants ? parseInt(nbParticipants) : 1,
      startTimestamp: this.meetingStartTimestamp,
      endTimestamp: endCall ? new Date().getTime() : undefined
    }
    chrome.runtime.sendMessage(
      {
        meetingId: this.getMeetingId(),
        metadata: metadata,
        type: ExtensionMessages.MeetingMetadata
      },
      () => {}
    )
  }
  startTranscribing(): void {
    //TODO divide this into 2 - 1 that gets in the text, and the other that sends the text to the background script along with the meeting id
    const ccDiv = document.querySelector(this.SELECTOR_CC_DIV) as HTMLElement
    const callDiv = this.callBar!
    const participantsDiv = document.querySelector(this.SELECTOR_PARTICIPANTS) as HTMLElement
    const endCallDiv = document.querySelector(this.SELECTOR_END_CALL) as HTMLElement
    const self = this
    if (!ccDiv) {
      console.log('no cc div found')
      return
    }

    console.log('found caption div - checking if hidden: ' + ccDiv.style.display)
    if (ccDiv.style.display === 'none') {
      console.log("caption isn't enabled - enabling")
      const ccButton = callDiv.querySelector(this.SELECTOR_CC_BUTTON) as HTMLElement
      if (ccButton) {
        console.log('found button - clicking')
        ccButton.click()
      } else {
        console.log("didn't find button")
      }
    }

    console.log('cc enabled - subscribing to observer')

    const ccDivObserver = new MutationObserver(() => {
      console.log('change happened')
      const language = ccDiv.querySelector(this.SELECTOR_LANGUAGE)?.textContent
      const speaker = ccDiv.querySelector(this.SELECTOR_SPEAKER)?.textContent
      const text = ccDiv.querySelector(this.SELECTOR_TEXT)?.textContent

      if (!language && !text) {
        console.log('CALL HANGUP?')
        return
      }
      console.log(`Language: ${language}\nSpeaker: ${speaker}\nText: ${text}`)

      const meetingMessage: MeetingMessage = {
        language: language ? language : '',
        speaker: speaker ? speaker : '',
        text: text ? text : '',
        timestamp: new Date().getTime()
      }
      chrome.runtime.sendMessage(
        {
          meetingId: this.getMeetingId(),
          message: meetingMessage,
          type: ExtensionMessages.MeetingMessage
        },
        () => {}
      )
    })

    ccDivObserver.observe(ccDiv, {
      childList: true,
      subtree: true
    })

    const participantsDivObserver = new MutationObserver(() => {
      console.log('number of participants changed')
      self.updateMeetingMetadata()
    })

    participantsDivObserver.observe(participantsDiv, {
      characterData: true,
      attributes: true,
      childList: true,
      subtree: true
    })

    endCallDiv.onclick = () => {
      console.log('ending call')
      self.updateMeetingMetadata(true)
    }
  }
}

//TODO: Find out which service we're on and initialize the right service
//TODO: Hide transcript display on production

const meetingService: MeetingService = new GoogleMeetsService()
meetingService.prepareListener()
console.log('ready')
