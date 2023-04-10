import { calendar_v3 } from 'googleapis'

const GOOGLE_CALENDAR_BASE_URL = 'https://www.googleapis.com/calendar/v3'

export interface GoogleCalendarEvent extends calendar_v3.Schema$Event {
  mid: string
}
type ResponseData = {
  items: GoogleCalendarEvent[]
}

export class GoogleCalendar {
  constructor(private accessToken: string) {}

  public async getMeetingDetails(title: string): Promise<GoogleCalendarEvent | undefined> {
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

    return data.items.find((calendar) => calendar.hangoutLink?.includes(title))
  }
}
