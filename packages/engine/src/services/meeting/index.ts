import { settings } from '../../config'
import { Meeting, MeetingMetadata } from '@recap/shared'

export class MeetingService {
  constructor(private meeting: Meeting) {}

  public metadata(): Omit<MeetingMetadata, 'percentage'> {
    const metadata: Omit<MeetingMetadata, 'percentage'> = {
      participants: Object.keys(this.meeting.attendees).length || 1,
      url: `${settings.baseURL}/app/meetings/${this.meeting.mid}`
    }

    return metadata
  }
}
