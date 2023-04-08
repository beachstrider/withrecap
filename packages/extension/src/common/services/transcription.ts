import { MeetingMetadata, MeetingMessage, Meeting } from '../models'

export class TranscriptionService {
  //local cache of meeting messages while background process is running
  allMeetingMessages: { [meetingId: string]: MeetingMessage[] } = {}
  tabsToMeetings: { [tabId: number]: string } = {}
  allMeetingsMetadata: { [meetingId: string]: MeetingMetadata } = {}

  getMeetingMetadata(meetingId: string): MeetingMetadata {
    return this.allMeetingsMetadata[meetingId]
  }

  updateMeetingMetadata(tabId: number, meetingId: string, metadata: MeetingMetadata): void {
    if (this.allMeetingsMetadata[meetingId]) {
      //update everything except the start timestamp
      this.allMeetingsMetadata[meetingId].title = metadata.title
      this.allMeetingsMetadata[meetingId].nbParticipants = metadata.nbParticipants
      this.allMeetingsMetadata[meetingId].endTimestamp = metadata.endTimestamp
    } else {
      this.allMeetingsMetadata[meetingId] = metadata
    }

    this.tabsToMeetings[tabId] = meetingId
    console.log(`updating meeting ${meetingId} with metadata: ${JSON.stringify(metadata)}`)
  }

  endMeetingFromTabId(tabId: number): void {
    const meetingId = this.tabsToMeetings[tabId]
    //update if no end timestamp is set
    if (meetingId && this.allMeetingsMetadata[meetingId] && !this.allMeetingsMetadata[meetingId].endTimestamp) {
      console.log(`ending meeting ${meetingId} from tab ${tabId}`)
      this.allMeetingsMetadata[meetingId].endTimestamp = new Date().getTime()
    }
  }

  appendMessage(meetingId: string, message: MeetingMessage): void {
    /* 
            Logic to prevent duplicate messages, empty messages etc.. 
            Google meeting messages will look as follows if the same speaker is speaking continuously:
            Hello, how 
            Hello, how are 
            Hello, how are you 
            Hello, how are you? My name is 
            Hello, how are you? My name is Rod. 
        */

    // not do anything for empty messages
    // hello
    // pause -> we get an empty message
    // how are you?
    if (message.text.length === 0) {
      return
    }

    let meetingMessages: MeetingMessage[] = this.allMeetingMessages[meetingId] ? this.allMeetingMessages[meetingId] : []

    // get last message - if there isn't a last message - just append it
    let lastMessage = meetingMessages.at(-1)
    if (!lastMessage) {
      meetingMessages.push(message)
    }
    //if new speaker append as is
    else if (lastMessage!.speaker !== message.speaker) {
      meetingMessages.push(message)
    }
    //if same speaker, check if the new message is a continuation of the last message
    else if (message.text.startsWith(lastMessage!.text)) {
      // TODO: Maybe use something more flexible than startsWith
      // What if the previous message ends with a dot and the new
      // one with a comma since the user paused and then resumed speaking
      // replace the last message in that case
      meetingMessages.pop()
      meetingMessages.push(message)
    } else {
      //same speaker but there was pause in speech e.g: Hello - pause - How are you?
      meetingMessages.push(message)
    }
    this.allMeetingMessages[meetingId] = meetingMessages
  }

  getMeetingTranscription(meetingId: string): MeetingMessage[] {
    return this.allMeetingMessages[meetingId]
  }

  getCurrentJoinedMeetings(): Meeting[] {
    let joinedMeetings: Meeting[] = []
    for (const meetingId in this.allMeetingsMetadata) {
      const metadata = this.allMeetingsMetadata[meetingId]
      if (!metadata.endTimestamp) {
        joinedMeetings.push({
          meetingId,
          metadata,
          transcription: this.allMeetingMessages[meetingId]
        })
      }
    }
    return joinedMeetings
  }

  getEndedMeetings(): Meeting[] {
    let endedMeetings: Meeting[] = []
    for (const meetingId in this.allMeetingsMetadata) {
      const metadata = this.allMeetingsMetadata[meetingId]
      if (metadata.endTimestamp) {
        endedMeetings.push({
          meetingId,
          metadata,
          transcription: this.allMeetingMessages[meetingId]
        })
      }
    }
    return endedMeetings
  }

  popMeeting(meetingId: string): Meeting {
    const meeting = {
      meetingId,
      metadata: this.allMeetingsMetadata[meetingId],
      transcription: this.allMeetingMessages[meetingId]
    }
    delete this.allMeetingsMetadata[meetingId]
    delete this.allMeetingMessages[meetingId]
    return meeting
  }

  getAllMeetings(): Meeting[] {
    let meetings: Meeting[] = []
    for (const meetingId in this.allMeetingsMetadata) {
      meetings.push({
        meetingId,
        metadata: this.allMeetingsMetadata[meetingId],
        transcription: this.allMeetingMessages[meetingId]
      })
    }
    return meetings
  }
}
