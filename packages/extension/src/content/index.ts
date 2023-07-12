import * as Sentry from '@sentry/browser'

import { Message, initSentry, sanitize } from '@recap/shared'

import { ExtensionMessages } from '../common'

const SELECTOR_CALL_BAR = "div[jscontroller='kAPMuc']"
const SELECTOR_CC_DIV = 'div.a4cQT'
const SELECTOR_CC_BUTTON = "button[jscontroller='xzbRj']"
const SELECTOR_LANGUAGE = "span[jsname='V67aGc']"
const SELECTOR_SPEAKER = "div[class='zs7s8d jxFHg']"
const SELECTOR_TEXT = "div[jsname='YSxPC']"
const SELECTOR_LEFT_DIV = "div[class='kJU3pb r14hdb']"
const SELECTOR_END_CALL_BUTTON = "div[jscontroller='m1IMT'] button[jscontroller='soHxf']"

const ccButtonClass = {
  pressed: 'VfPpkd-Bz112c-LgbsSe VfPpkd-Bz112c-LgbsSe-OWXEXe-IT5dJd fzRBVc tmJved xHd4Cb rmHNDe',
  released: 'VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe'
}

const style = document.createElement('style')

const styles = {
  enabled: `
    ${SELECTOR_CC_DIV} {
      height: 216px !important;
    }
    `,
  disabled: `
    ${SELECTOR_CC_DIV} {
      height: 0 !important;
    }
  `
}

const wait = async (time: number) => {
  await new Promise((resolve) => setTimeout(resolve, time))
}

class GoogleMeetsService {
  private email: string = ''
  private displayName: string = ''
  private messages: Message[] = []

  private callBar: HTMLDivElement | null = null
  private ccDivObserver: MutationObserver | null = null

  // To limit docObserver to run only once
  private callStarted = false
  private callEnded = false
  private captionEnabled = true

  private getMeetingId(): string {
    return window.location.pathname.slice(1)
  }

  private async enableCaption(ccDiv: HTMLDivElement, callDiv: HTMLDivElement): Promise<void> {
    const isHidden = ccDiv.style.display === 'none'

    console.debug('found caption div - checking if hidden...', isHidden)
    if (isHidden) {
      const _ccButton = callDiv.querySelector<HTMLButtonElement>(SELECTOR_CC_BUTTON)

      if (_ccButton) {
        _ccButton.click()

        document.head.appendChild(style)

        await wait(100)
        _ccButton.className = ccButtonClass.released
        _ccButton.setAttribute('jscontroller', '')
        _ccButton.setAttribute('jsaction', '')
        _ccButton.setAttribute('jsname', '')

        const ccButton = _ccButton.cloneNode(true) as HTMLButtonElement
        _ccButton.parentElement!.replaceChild(ccButton, _ccButton)

        ccButton.addEventListener('click', () => this.toggleCaption(ccButton))
        this.toggleCaption(ccButton)

        console.debug('caption enabled')
      } else {
        throw new Error("Couldn't find button while trying to enable caption")
      }
    }
  }

  private toggleCaption(ccButton: HTMLButtonElement) {
    this.captionEnabled = !this.captionEnabled

    if (this.captionEnabled) {
      ccButton.className = ccButtonClass.pressed
      style.innerHTML = styles.enabled
    } else {
      ccButton.className = ccButtonClass.released
      style.innerHTML = styles.disabled
    }
  }

  private async transferMessages() {
    if (this.messages.length > 0) {
      console.debug('sending===>')
      const { error } = await chrome.runtime.sendMessage({
        meetingId: this.getMeetingId(),
        messages: sanitize(this.messages),
        type: ExtensionMessages.MeetingMessage
      })

      if (error) {
        return console.error('error occured from transfering messages', { error })
      }

      this.messages = []
    }
  }

  private listenOnNewMessage(ccDiv: HTMLDivElement): MutationObserver {
    const ccDivObserver = new MutationObserver(async () => {
      const language = ccDiv.querySelector<HTMLSpanElement>(SELECTOR_LANGUAGE)?.textContent
      const speakerName = ccDiv.querySelector<HTMLDivElement>(SELECTOR_SPEAKER)?.textContent
      const text = ccDiv.querySelector<HTMLDivElement>(SELECTOR_TEXT)?.textContent

      if (!language || !speakerName || !text) {
        return console.debug('message skipped, some information is missing', {
          language: !!language,
          speakerName: !!speakerName,
          text: !!text
        })
      }

      // We use only self messages
      if (speakerName.toLowerCase() === 'you') {
        this.messages.push({
          email: this.email,
          speaker: this.displayName,
          language,
          text: text.trim(),
          timestamp: new Date().getTime()
        })
      } else {
        // Speaker switching
        await this.transferMessages()
      }
    })

    ccDivObserver.observe(ccDiv, {
      childList: true,
      subtree: true
    })

    return ccDivObserver
  }

  public async prepareListener(): Promise<void> {
    const docObserver = new MutationObserver(async (_mutations: MutationRecord[], observer: MutationObserver) => {
      const btnCallEnd = document.body.querySelector<HTMLDivElement>(SELECTOR_END_CALL_BUTTON)
      const outMeetBar = document.body.querySelector<HTMLDivElement>(SELECTOR_LEFT_DIV)

      this.callBar = document.body.querySelector(SELECTOR_CALL_BAR)

      if (this.callBar && btnCallEnd && !this.callStarted) {
        // HACK: sometimes chrome.runtime is undefined, this is known as a heisenbug
        while (true) {
          if (typeof chrome.runtime !== 'undefined') {
            break
          }

          await wait(2000)
          continue
        }

        this.callStarted = true

        // HACK: in case background script is still logging in
        // For example the meeting was ended through tab close, but then you joined again - this will nullify the metadata's endTimestamp
        while (true) {
          const { displayName, email, isEnabled, error } = await chrome.runtime.sendMessage<any, any>({
            addonId: 'meet',
            type: ExtensionMessages.MeetingUserInfo
          })

          if (error) {
            console.debug(`${error}. retrying..`)
            await wait(2000)
            continue
          }

          if (!isEnabled) {
            return console.debug('not recording, addon is disabled')
          }

          this.email = email
          this.displayName = displayName

          break
        }

        btnCallEnd.addEventListener('click', async () => {
          btnCallEnd.onclick = null
          await this.endMeeting()
        })

        chrome.runtime
          .sendMessage({
            meetingId: this.getMeetingId(),
            type: ExtensionMessages.MeetingStarted
          })
          .then(async () => {
            console.debug('call started')

            observer.disconnect()
            // click on the cc button and start transcribing
            await this.startTranscribing()
          })
          .catch(({ error }) => {
            // TODO: Display a toast and stop there?
            // This is a critical error and we cannot continue
          })
      }

      if (outMeetBar) {
        observer.disconnect()
        await this.endMeeting()
      }
    })

    docObserver.observe(document.body, {
      childList: true,
      subtree: true
    })
  }

  public async startTranscribing(): Promise<void> {
    const ccDiv = document.querySelector<HTMLDivElement>(SELECTOR_CC_DIV)
    const callDiv = this.callBar

    if (!ccDiv || !callDiv) {
      const error = `some required visual components are missing: ${JSON.stringify(
        {
          ccDiv: !!ccDiv,
          callDiv: !!callDiv
        },
        undefined,
        4
      )}`

      throw new Error(error)
    }

    this.enableCaption(ccDiv, callDiv)

    this.ccDivObserver = this.listenOnNewMessage(ccDiv)
  }

  private async endMeeting() {
    if (!this.callEnded) {
      console.debug('ending call')
      // Remove observers are they are not needed anymore
      this.ccDivObserver?.disconnect()

      await this.transferMessages()

      const { error } = await chrome.runtime.sendMessage({
        meetingId: this.getMeetingId(),
        type: ExtensionMessages.MeetingEnded
      })

      this.callEnded = true

      if (error) {
        // TODO: Display a toast to the user? Retry?
      }
    }
  }
}

const main = async () => {
  initSentry('extension:content')

  try {
    const meetingService = new GoogleMeetsService()
    meetingService.prepareListener()
  } catch (err) {
    Sentry.captureException(err)
  }
}

main()
