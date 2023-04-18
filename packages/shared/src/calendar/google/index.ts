import { calendar_v3 } from 'googleapis'

import { Meeting } from '../../storage/meetings'

const GOOGLE_CALENDAR_BASE_URL = 'https://www.googleapis.com/calendar/v3'

type ResponseData = {
  items: calendar_v3.Schema$Event[]
}

export class GoogleCalendar {
  constructor(private accessToken: string) {}

  public async getMeetingDetails(mid: string): Promise<Meeting | undefined> {
    const now = new Date().toISOString()
    const inOneHour = new Date(Date.now() + 60 * 60 * 1000).toISOString()

    const response = await fetch(
      `${GOOGLE_CALENDAR_BASE_URL}/calendars/primary/events?timeMin=${now}&timeMax=${inOneHour}&singleEvents=true`,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
    )
    const data: ResponseData = await response.json()

    const event = data.items.find((calendar) => calendar.hangoutLink?.includes(mid))

    return this.toMeeting(event, mid)
  }

  private toMeeting(event: calendar_v3.Schema$Event | undefined, mid: string): Meeting | undefined {
    if (!event) {
      return undefined
    }

    return {
      mid,
      id: event.id!,
      attendees: event.attendees?.map((a) => ({ email: a.email!, name: a.displayName! })) || [],
      start: event.start!.dateTime!,
      end: event.end!.dateTime!,
      link: event.hangoutLink!,
      title: event.summary!,
      conversation: []
    }
  }
}
