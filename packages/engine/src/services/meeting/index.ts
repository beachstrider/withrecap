import { Meeting, MeetingMetadata } from '@recap/shared'
import { format } from 'date-fns'
import { settings } from '../../config'

export class MeetingService {
  constructor(private meeting: Meeting) {}

  public metadata(): Omit<MeetingMetadata, 'percentage'> {
    const startTime = format(new Date(this.meeting.start), 'h:mm a')
    const endTime = format(new Date(this.meeting.end), 'h:mm a')

    const metadata: Omit<MeetingMetadata, 'percentage'> = {
      participants: Object.keys(this.meeting.attendees).length || 1,
      title: this.meeting.title,
      start: startTime,
      end: endTime,
      url: `${settings.baseURL}/app/meetings/${this.meeting.mid}`
    }

    return metadata
  }
}
