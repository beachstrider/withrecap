import { MeetingMetadata } from '@recap/shared'
import Client from 'mailgun.js/client'
import { MailgunMessageData, MessagesSendResult } from 'mailgun.js/interfaces/Messages'

export enum Templates {
  Welcome = 'welcome',
  MeetingEnd = 'meeting-end',
  GettingStarted = 'getting-started',
  Invite = 'invite'
}

interface Options {
  [Templates.Welcome]: { email: string }
  [Templates.MeetingEnd]: {
    email: string
    meetingMetadata: Pick<MeetingMetadata, 'end' | 'participants' | 'start' | 'title' | 'url'>
  }
  [Templates.GettingStarted]: { email: string }
  [Templates.Invite]: { email: string[]; inviterName: string }
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

export class MailService {
  constructor(private mail: Client, private domain: string) {}

  send<T extends Templates>(template: T, options: Options[T]): Promise<MessagesSendResult> {
    const data: Partial<MailgunMessageData> = {
      from: 'Recap <noreply@withrecap.com>',
      to: options.email
    }

    switch (template) {
      case Templates.Welcome:
        break
      case Templates.MeetingEnd:
        if ('meetingMetadata' in options) {
          data['h:X-Mailgun-Variables'] = JSON.stringify({ ...options.meetingMetadata })
        }
        break
      case Templates.GettingStarted:
        break
      case Templates.Invite:
        if ('inviterName' in options) {
          data['h:X-Mailgun-Variables'] = JSON.stringify({ inviterName: options.inviterName })
        }
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
