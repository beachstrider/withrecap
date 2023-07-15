import * as Sentry from '@sentry/browser'

import { initSentry, wait, waitUntil } from '@recap/shared'

import { ExtensionMessages } from '../common'
import css from './index.css'

const SELECTOR_CALL_BAR = "div[jscontroller='kAPMuc']"
const SELECTOR_CC_DIV = 'div.a4cQT'
const SELECTOR_CC_BUTTON = "button[jscontroller='xzbRj']"
const SELECTOR_LANGUAGE = "span[jsname='V67aGc']"
const SELECTOR_SPEAKER = 'div.zs7s8d.jxFHg'
const SELECTOR_TEXT = "div[jsname='YSxPC']:last-child"
const SELECTOR_LEFT_DIV = 'div.kJU3pb.r14hdb'
const SELECTOR_END_CALL_BUTTON = "div[jscontroller='m1IMT'] button[jscontroller='soHxf']"

const ccDivStyle = document.createElement('style')
const recordingMark = document.createElement('div')

const ccButtonClass = {
  pressed: 'VfPpkd-Bz112c-LgbsSe VfPpkd-Bz112c-LgbsSe-OWXEXe-IT5dJd fzRBVc tmJved xHd4Cb rmHNDe',
  released: 'VfPpkd-Bz112c-LgbsSe fzRBVc tmJved xHd4Cb rmHNDe'
}

const ccDivStyles = {
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

recordingMark.className = 'blinking'
recordingMark.style.position = 'absolute'
recordingMark.style.top = '2px'
recordingMark.style.right = '2px'
recordingMark.style.width = '8px'
recordingMark.style.height = '8px'
recordingMark.style.borderRadius = '50%'
recordingMark.style.backgroundColor = '#eb5144'

class GoogleMeetsService {
  private meetingId: string | undefined
  private email: string = ''
  private displayName: string = ''

  private callBar: HTMLDivElement | null = null
  private ccDivObserver: MutationObserver | null = null

  // To limit docObserver to run only once
  private callStarted = false
  private callEnded = false
  private captionEnabled = true

  constructor() {
    this.loadCss()
    this.getMeetingId()
  }

  private async loadCss() {
    const style = document.createElement('style')
    style.innerHTML = css
    await wait(500)
    document.head.appendChild(style)
  }

  private getMeetingId() {
    this.meetingId = window.location.pathname.slice(1)
  }

  private toggleCaption(ccButton: HTMLButtonElement) {
    this.captionEnabled = !this.captionEnabled

    if (this.captionEnabled) {
      ccButton.className = ccButtonClass.pressed
      ccDivStyle.innerHTML = ccDivStyles.enabled
    } else {
      ccButton.className = ccButtonClass.released
      ccDivStyle.innerHTML = ccDivStyles.disabled
    }
  }

  private listenOnNewMessage(ccDiv: HTMLDivElement): MutationObserver {
    const ccDivObserver = new MutationObserver(async () => {
      const language = ccDiv.querySelector<HTMLSpanElement>(SELECTOR_LANGUAGE)?.textContent
      const speakerName = ccDiv.querySelector<HTMLDivElement>(SELECTOR_SPEAKER)?.textContent
      const text = ccDiv.querySelector<HTMLDivElement>(SELECTOR_TEXT)?.textContent

      if (!language || !speakerName || !text) {
        return
      }

      const me = speakerName.toLowerCase() === 'you' ? true : false
      const email = me ? this.email : ''
      const speaker = me ? this.displayName : speakerName

      const { error } = await chrome.runtime.sendMessage({
        meetingId: this.meetingId,
        message: {
          email,
          speaker,
          language,
          text: text.trim(),
          timestamp: new Date().getTime()
        },
        type: ExtensionMessages.MeetingMessage
      })

      if (error) {
        return console.error('error occured from transfering messages', { error })
      }
    })

    ccDivObserver.observe(ccDiv, {
      childList: true,
      subtree: true
    })

    return ccDivObserver
  }

  private async enableCaption(ccDiv: HTMLDivElement, callDiv: HTMLDivElement): Promise<void> {
    const isHidden = ccDiv.style.display === 'none'

    if (isHidden) {
      const _ccButton = callDiv.querySelector<HTMLButtonElement>(SELECTOR_CC_BUTTON)

      if (_ccButton) {
        _ccButton.click()

        document.head.appendChild(ccDivStyle)

        await wait(100)
        _ccButton.className = ccButtonClass.released
        _ccButton.setAttribute('jscontroller', '')
        _ccButton.setAttribute('jsaction', '')
        _ccButton.setAttribute('jsname', '')

        const ccButton = _ccButton.cloneNode(true) as HTMLButtonElement
        _ccButton.parentElement!.replaceChild(ccButton, _ccButton)

        ccButton.addEventListener('click', () => this.toggleCaption(ccButton))
        this.toggleCaption(ccButton)

        console.debug('-> caption enabled')

        ccButton.appendChild(recordingMark)
      } else {
        throw new Error("Couldn't find button while trying to enable caption")
      }
    }
  }

  private async startTranscribing(): Promise<void> {
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
      console.debug('-> ending call')
      // Remove observers are they are not needed anymore
      this.ccDivObserver?.disconnect()

      const { error } = await chrome.runtime.sendMessage({
        email: this.email,
        meetingId: this.meetingId,
        type: ExtensionMessages.MeetingEnded
      })

      this.callEnded = true

      if (error) {
        return console.error(error)
      }
    }
  }

  public async prepareListener(): Promise<void> {
    const docObserver = new MutationObserver(async (_mutations: MutationRecord[], observer: MutationObserver) => {
      const btnCallEnd = document.body.querySelector<HTMLDivElement>(SELECTOR_END_CALL_BUTTON)
      const outMeetBar = document.body.querySelector<HTMLDivElement>(SELECTOR_LEFT_DIV)

      this.callBar = document.body.querySelector(SELECTOR_CALL_BAR)

      if (this.callBar && btnCallEnd && !this.callStarted) {
        // HACK: sometimes chrome.runtime is undefined, this is known as a heisenbug
        await waitUntil(() => typeof chrome.runtime !== 'undefined')

        this.callStarted = true

        // // HACK: in case background script is still logging in
        // For example the meeting was ended through tab close, but then you joined again - this will nullify the metadata's endTimestamp
        try {
          await waitUntil(async () => {
            const { displayName, email, isEnabled, error } = await chrome.runtime.sendMessage<any, any>({
              addonId: 'meet',
              type: ExtensionMessages.MeetingUserInfo
            })

            if (error) {
              console.warn(`-> ${error}. retrying..`)
              return false
            }

            if (!isEnabled) {
              throw new Error('not recording, addon is disabled')
            }

            this.email = email
            this.displayName = displayName

            return true
          })
        } catch (err) {
          return console.error(err)
        }

        btnCallEnd.addEventListener('click', async () => {
          btnCallEnd.onclick = null
          await this.endMeeting()
        })

        chrome.runtime
          .sendMessage({
            meetingId: this.meetingId,
            type: ExtensionMessages.MeetingStarted
          })
          .then(async () => {
            console.debug('-> call started')

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
