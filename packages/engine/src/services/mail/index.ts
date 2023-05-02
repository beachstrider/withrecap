import { Meeting, MeetingMetadata } from '@recap/shared'
import Client from 'mailgun.js/client'
import { MailgunMessageData, MessagesSendResult } from 'mailgun.js/interfaces/Messages'

export enum Templates {
  Welcome = 'welcome',
  MeetingEnd = 'meeting-end',
  GettingStarted = 'getting-started',
  Invite = 'invite'
}

interface Options {
  [Templates.Welcome]: { email: string; appUrl: string }
  [Templates.MeetingEnd]: {
    email: string
    meetingMetadata: Pick<MeetingMetadata, 'participants' | 'url'> & Pick<Meeting, 'end' | 'start' | 'title'>
    appUrl: string
  }
  [Templates.GettingStarted]: { email: string; appUrl: string }
  [Templates.Invite]: { email: string; inviterName: string; appUrl: string; storeUrl: string }
}

const BASE_DATA: { [key in Templates]: Partial<MailgunMessageData> } = {
  [Templates.Welcome]: {
    subject: 'Welcome to Recap'
  },
  [Templates.MeetingEnd]: {
    subject: 'Meeting Summary'
  },
  [Templates.GettingStarted]: {
    subject: 'Getting Started'
  },
  [Templates.Invite]: {
    subject: 'Join Recap'
  }
}

const MAILGUN_CUSTOM_VARIABLE_HEADER = 'h:X-Mailgun-Variables'

export class MailService {
  constructor(private mail: Client, private domain: string) {}

  send<T extends Templates>(template: T, options: Options[T]): Promise<MessagesSendResult> {
    const data: Partial<MailgunMessageData> = {
      from: 'Recap <noreply@withrecap.com>',
      to: options.email
    }

    switch (template) {
      case Templates.Welcome:
        if ('appUrl' in options) {
          data[MAILGUN_CUSTOM_VARIABLE_HEADER] = JSON.stringify({ appUrl: options.appUrl })
        }
        break
      case Templates.MeetingEnd:
        if ('meetingMetadata' in options && 'appUrl' in options) {
          data[MAILGUN_CUSTOM_VARIABLE_HEADER] = JSON.stringify({ ...options.meetingMetadata, appUrl: options.appUrl })
        }
        break
      case Templates.Invite:
        if ('inviterName' in options && 'appUrl' in options && 'storeUrl' in options) {
          data[MAILGUN_CUSTOM_VARIABLE_HEADER] = JSON.stringify({
            inviterName: options.inviterName,
            appUrl: options.appUrl,
            storeUrl: options.storeUrl
          })
        }
        break
      case Templates.GettingStarted:
        break
      default:
        break
    }

    const msg: MailgunMessageData = {
      ...BASE_DATA[template],
      ...data,
      template: template
    }

    return this.mail.messages.create(this.domain, msg)
  }
}
