import { Message } from '@recap/shared'
import { ExtensionMessages } from '../common'

const SELECTOR_CALL_BAR = "div[jscontroller='kAPMuc']"
const SELECTOR_CC_DIV = '.a4cQT'
const SELECTOR_CC_BUTTON = "button[jscontroller='xzbRj']"
const SELECTOR_LANGUAGE = "span[jsname='V67aGc']"
const SELECTOR_SPEAKER = "div[class='zs7s8d jxFHg']"
const SELECTOR_TEXT = "div[jsname='YSxPC']"
const SELECTOR_END_CALL = "div[jscontroller='m1IMT']"

const retry = async (callback: () => Promise<any>, time: number) => {
  let retry = true
  while (retry) {
    try {
      await callback()
      retry = false
    } catch (err) {
      console.error('An error occurred, retrying soon...', err)

      await new Promise((resolve) => setTimeout(resolve, time))
    }
  }
}

class GoogleMeetsService {
  private callBar: HTMLDivElement | null = null

  private getMeetingId(): string {
    return window.location.pathname.slice(1)
  }

  private enableCaption(ccDiv: HTMLDivElement, callDiv: HTMLDivElement): void {
    const isHidden = ccDiv.style.display === 'none'
    console.debug('found caption div - checking if hidden... ', isHidden)
    if (isHidden) {
      const ccButton = callDiv.querySelector<HTMLButtonElement>(SELECTOR_CC_BUTTON)
      if (ccButton) {
        ccButton.click()
        console.debug('caption enabled')

        // Disable button so it cannot be toggled manually
        ccButton.disabled = true
        console.debug('caption toggling disabled')
      } else {
        console.error("didn't find button trying to enable caption")
      }
    }
  }

  private listenOnNewMessage(ccDiv: HTMLDivElement): MutationObserver {
    const ccDivObserver = new MutationObserver(() => {
      const language = ccDiv.querySelector<HTMLSpanElement>(SELECTOR_LANGUAGE)?.textContent
      const speaker = ccDiv.querySelector<HTMLDivElement>(SELECTOR_SPEAKER)?.textContent
      const text = ccDiv.querySelector<HTMLDivElement>(SELECTOR_TEXT)?.textContent

      if (!language || !speaker || !text) {
        return console.debug('message skipped, some information is missing', {
          language: !!language,
          speaker: !!speaker,
          text: !!text
        })
      }

      console.debug(`Language: ${language}\nSpeaker: ${speaker}\nText: ${text}`)

      const meetingMessage: Message = {
        language,
        speaker,
        text: text.trim(),
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

  public async prepareListener(): Promise<void> {
    const { isEnabled, error } = await chrome.runtime.sendMessage<any, any>({
      addonId: 'meet',
      type: ExtensionMessages.AddonSupported
    })

    if (error) {
      throw new Error(error)
    }

    if (!isEnabled) {
      return console.debug('not recording, addon is disabled')
    }

    const docObserver = new MutationObserver((_mutations: MutationRecord[], observer: MutationObserver) => {
      this.callBar = document.body.querySelector(SELECTOR_CALL_BAR)

      if (this.callBar) {
        observer.disconnect()

        console.debug('call started')

        // Note: this is a semi hack to make sure all element are displayed properly so we can interact with the UI
        setTimeout(() => {
          // this will also be useful even if you rejoin a meeting
          // for example the meeting was ended through tab close, but then you joined again - this will nullify the metadata's endTimestamp
          chrome.runtime.sendMessage(
            {
              meetingId: this.getMeetingId(),
              type: ExtensionMessages.MeetingStarted
            },
            () => {}
          )

          // click on the cc button and start transcribing
          retry(this.startTranscribing.bind(this), 2000)
        }, 800)
      }
    })

    docObserver.observe(document.body, {
      childList: true,
      subtree: true
    })
  }

  public async startTranscribing(): Promise<void> {
    const ccDiv = document.querySelector<HTMLDivElement>(SELECTOR_CC_DIV)
    const endCallDiv = document.querySelector<HTMLDivElement>(SELECTOR_END_CALL)
    const callDiv = this.callBar

    if (!ccDiv || !endCallDiv || !callDiv) {
      const error = 'some required visual components are missing'
      console.error(error, {
        ccDiv: !!ccDiv,
        endCallDiv: !!endCallDiv,
        callDiv: !!callDiv
      })

      throw new Error(error)
    }

    this.enableCaption(ccDiv, callDiv)

    const ccDivObserver = this.listenOnNewMessage(ccDiv)

    endCallDiv.onclick = () => {
      // Remove observers are they are not needed anymore
      ccDivObserver.disconnect()
      endCallDiv.onclick = null

      console.debug('ending call')

      chrome.runtime.sendMessage(
        {
          meetingId: this.getMeetingId(),
          type: ExtensionMessages.MeetingEnded
        },
        () => {}
      )
    }
  }
}

const main = async () => {
  //TODO: Once we support more addons, find out which service we're on and initialize the right service
  const meetingService = new GoogleMeetsService()

  await retry(meetingService.prepareListener.bind(meetingService), 1000)
}

main()
