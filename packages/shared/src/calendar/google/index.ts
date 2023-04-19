import { calendar_v3 } from 'googleapis'

import { Meeting } from '../../storage/meetings'

const GOOGLE_CALENDAR_BASE_URL = 'https://www.googleapis.com/calendar/v3'

type ResponseData = {
  items: calendar_v3.Schema$Event[]
}

export class GoogleCalendar {
  constructor(private accessToken: string) {}

  public async getMeetingDetails(mid: string): Promise<Meeting | undefined> {
    // First we fetch the events of the day
    const beginningOfDay = new Date()
    beginningOfDay.setHours(0, 0, 0, 0)
    const endOfDay = new Date()
    endOfDay.setHours(23, 59, 59, 999)

    const response = await fetch(
      `${GOOGLE_CALENDAR_BASE_URL}/calendars/primary/events?timeMin=${beginningOfDay.toISOString()}&timeMax=${endOfDay.toISOString()}&singleEvents=true`,
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

    const attendees =
      event.attendees?.map((a) => {
        return { email: a.email!, name: a.displayName || '' }
      }) || []

    return {
      mid,
      id: event.id!,
      attendees: attendees,
      start: event.start!.dateTime!,
      end: event.end!.dateTime!,
      link: event.hangoutLink!,
      title: event.summary!,
      description: event.description ?? undefined,
      conversation: [],
      ended: false
    }
  }
}
