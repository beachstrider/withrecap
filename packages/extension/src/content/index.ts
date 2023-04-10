import { ExtensionMessages, MeetingMetadata, MeetingMessage } from '../common/models'

const SELECTOR_CALL_BAR = "div[jscontroller='kAPMuc']"
const SELECTOR_CC_DIV = '.a4cQT'
const SELECTOR_CC_BUTTON = "button[jscontroller='xzbRj']"
const SELECTOR_LANGUAGE = "span[jsname='V67aGc']"
const SELECTOR_SPEAKER = "div[class='zs7s8d jxFHg']"
const SELECTOR_TEXT = "div[jsname='YSxPC']"
const SELECTOR_TITLE = "div[jscontroller='yEvoid']"
const SELECTOR_PARTICIPANTS = "div[jscontroller='SKibOb']"
const SELECTOR_END_CALL = "div[jscontroller='m1IMT']"

class GoogleMeetsService {
  private callBar: HTMLDivElement | null = null

  private meetingStartTimestamp?: number
  private meetingEndTimestamp?: number

  public isOnCall(): boolean {
    // if call bar is available this means the call started
    return this.callBar ? true : false
  }

  private getMeetingTitle(): string {
    const divTitle = document.querySelector<HTMLDivElement>(SELECTOR_TITLE)

    if (!divTitle?.textContent) {
      console.error('title of the meeting could not be found.')
    }

    return divTitle?.textContent ?? ''
  }

  private getMeetingId(): string {
    return window.location.pathname.slice(1)
  }

  private getMeetingMetadata(): MeetingMetadata {
    const nbParticipantsText = document.querySelector<HTMLDivElement>(SELECTOR_PARTICIPANTS)?.textContent
    console.debug(`Number of participants: ${nbParticipantsText}`)
    // We try to convert the text input to a integer and fallback to 1 when undefined
    const nbParticipants = nbParticipantsText ? parseInt(nbParticipantsText) : 1

    if (!this.meetingStartTimestamp) {
      this.meetingStartTimestamp = new Date().getTime()
    }

    const title = this.getMeetingTitle()

    return {
      title: title,
      nbParticipants: nbParticipants,
      startTimestamp: this.meetingStartTimestamp,
      endTimestamp: this.meetingEndTimestamp
    }
  }

  private enableCaption(ccDiv: HTMLDivElement, callDiv: HTMLDivElement): void {
    const isHidden = ccDiv.style.display === 'none'
    console.debug('found caption div - checking if hidden... ', isHidden)
    if (isHidden) {
      const ccButton = callDiv.querySelector<HTMLButtonElement>(SELECTOR_CC_BUTTON)
      if (ccButton) {
        ccButton.click()
        console.debug('caption enabled')
      } else {
        console.error("didn't find button trying to enable caption")
      }
    }
  }

  private listenOnNewMessage(ccDiv: HTMLDivElement): MutationObserver {
    const ccDivObserver = new MutationObserver(() => {
      console.debug('change happened')
      const language = ccDiv.querySelector<HTMLSpanElement>(SELECTOR_LANGUAGE)?.textContent
      const speaker = ccDiv.querySelector<HTMLDivElement>(SELECTOR_SPEAKER)?.textContent
      const text = ccDiv.querySelector<HTMLDivElement>(SELECTOR_TEXT)?.textContent

      if (!language && !text) {
        console.error('an unexpected error happened, text and language could not be extracted. CALL HANGUP?')
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

    return ccDivObserver
  }

  private listenOnParticipantChange(participantsDiv: HTMLDivElement): MutationObserver {
    console.debug('subscribing to observer')

    const participantsDivObserver = new MutationObserver(() => {
      console.debug('number of participants changed')

      const metadata = this.getMeetingMetadata()
      chrome.runtime.sendMessage({
        meetingId: this.getMeetingId(),
        metadata: metadata,
        type: ExtensionMessages.MeetingMetadata
      })
    })

    participantsDivObserver.observe(participantsDiv, {
      characterData: true,
      attributes: true,
      childList: true,
      subtree: true
    })

    return participantsDivObserver
  }

  public prepareListener(): void {
    chrome.runtime.sendMessage<any, any>(
      {
        addonId: 'meet',
        type: ExtensionMessages.AddonSupported
      },
      (isEnabled) => {
        if (!isEnabled || chrome.runtime.lastError) {
          return
        }

        const docObserver = new MutationObserver(() => {
          this.callBar = document.body.querySelector(SELECTOR_CALL_BAR)

          if (this.callBar) {
            console.debug('call started')
            this.meetingStartTimestamp = new Date().getTime()

            // Note: this is a semi hack to make sure all element are displayed properly so we can interact with the UI
            setTimeout(() => {
              // this will also be useful even if you rejoin a meeting
              // for example the meeting was ended through tab close, but then you joined again - this will nullify the metadata's endTimestamp
              const metadata = this.getMeetingMetadata()
              chrome.runtime.sendMessage({
                meetingId: this.getMeetingId(),
                metadata: metadata,
                type: ExtensionMessages.MeetingStarted
              })

              // click on the cc button and start transcribing
              this.startTranscribing()
            }, 800)

            docObserver.disconnect()
          }
        })

        docObserver.observe(document.body, {
          childList: true,
          subtree: true
        })
      }
    )
  }

  public startTranscribing(): void {
    const ccDiv = document.querySelector<HTMLDivElement>(SELECTOR_CC_DIV)
    const participantsDiv = document.querySelector<HTMLDivElement>(SELECTOR_PARTICIPANTS)
    const endCallDiv = document.querySelector<HTMLDivElement>(SELECTOR_END_CALL)
    const callDiv = this.callBar

    if (!ccDiv || !participantsDiv || !endCallDiv || !callDiv) {
      return console.error('some required visual components are missing', {
        ccDiv: !!ccDiv,
        participantsDiv: !!participantsDiv,
        endCallDiv: !!endCallDiv,
        callDiv: !!callDiv
      })
    }

    this.enableCaption(ccDiv, callDiv)

    const ccDivObserver = this.listenOnNewMessage(ccDiv)
    const participantsDivObserver = this.listenOnParticipantChange(participantsDiv)

    endCallDiv.onclick = () => {
      console.debug('ending call')
      this.meetingEndTimestamp = new Date().getTime()

      const metadata = this.getMeetingMetadata()
      chrome.runtime.sendMessage({
        meetingId: this.getMeetingId(),
        metadata: metadata,
        type: ExtensionMessages.MeetingEnded
      })

      // Remove observers are they are not needed anymore
      ccDivObserver.disconnect()
      participantsDivObserver.disconnect()
    }
  }
}

//TODO: Once we support more addons, find out which service we're on and initialize the right service
//TODO: Hide transcript display on production

const meetingService = new GoogleMeetsService()
meetingService.prepareListener()
