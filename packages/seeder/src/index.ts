import { MeetingStore, Meeting } from '@recap/shared'

import conversation from './data/meetings/conversation.json'

const meeting = async () => {
  const store = new MeetingStore()
  const newMeeting: Meeting = {
    id: 'sdfsdf-=324sdfsdf23423sdf',
    mid: 'jva-fbxb-jca',
    title: '1:1',
    attendees: [
      {
        email: 'kevin@kevin.com',
        name: 'Kevin Tremblay'
      },
      {
        email: 'nathalie@notkevin.com',
        name: 'Nathalie Boucher'
      }
    ],
    start: '2023-04-16T12:00:00-04:00',
    end: '2023-04-16T14:00:00-04:00',
    link: 'https://meet.google.com/jva-fbxb-jca',
    conversation: conversation
  }

  return store.create(newMeeting.mid, newMeeting)
}

const main = async () => {
  console.log('Creating a new meeting...')
  await meeting()
  console.log('Meeting created with success.')
}

main()
