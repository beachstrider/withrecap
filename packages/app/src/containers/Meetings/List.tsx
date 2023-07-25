import { useEffect, useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'

import { Meeting, MeetingAttendee, getFormattedDate, getTime, sendSharingEmails, toast } from '@recap/shared'

import { Modal } from '../../components/display/Modal'
import UserAvatar from '../../components/display/UserAvatar'

import { MEETINGS } from '../../constants/routes'

import exitArrow from '../../assets/img/exit-arrow-right.svg'
import link from '../../assets/img/link.svg'
import purpleMessage from '../../assets/img/purpleMessage.svg'

interface Props {
  meetingsByDate: { [date: string]: Meeting[] }
}

interface Form {
  emails: string
}

const schema = yup.object().shape({
  emails: yup
    .string()
    .required('This field is required')
    .test('isValidEmails', 'One or more emails are invalid', function (value) {
      // Split the comma-separated string into an array of strings
      const emails = value.split(',').map((email) => email.trim())

      // Check if each email in the array is a valid email address
      return emails.every((email) => yup.string().email().isValidSync(email))
    })
})

export default function Index({ meetingsByDate }: Props) {
  const [mid, setMid] = useState('')
  const [openModal, setOpenModal] = useState<boolean>(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Form>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async ({ emails }: Form) => {
    try {
      await sendSharingEmails({ emails, mid })

      setOpenModal(false)
      toast.success('Recap link has been shared.')
    } catch (err) {
      toast.error('Failed to share a recap link', err)
    }
  }

  useEffect(() => {
    reset()
  }, [reset, openModal])

  const displayNames = (selectedAttendees: MeetingAttendee[], otherAttendeesCount: number) => {
    const names = selectedAttendees.map((attendee) => attendee.name || attendee.email).join(', ')

    if (otherAttendeesCount > 0) {
      const others = otherAttendeesCount > 1 ? 'others' : 'other'

      return <div>{`${names}, ${otherAttendeesCount} ${others}`}</div>
    }

    return <div>{names}</div>
  }

  return (
    <>
      {Object.entries(meetingsByDate).map(([date, meetings], key) => {
        const formattedDate = getFormattedDate(date)

        return (
          <div key={key}>
            <div className="flex gap-[24px] sm:mb-[54px] mb-[40]">
              <div className="flex items-center gap-[8px] font-semibold">
                <div className="text-[15px]">{formattedDate.weekDay}</div>
                <div className="text-[12px] px-[4px] py-[2px] bg-gray-100 text-gray-500 rounded-[6px]">
                  {formattedDate.day}
                </div>
                <div className="text-gray-300">•</div>
                <div className="text-[15px]">{formattedDate.relativeDate}</div>
              </div>
              <div className="flex items-center grow">
                <hr />
              </div>
            </div>
            <div className="flex flex-col sm:gap-[54px] gap-[40px]">
              {meetings.map((meeting, key) => {
                // We only want to display a maximum of two avatars
                const attendees = Object.values(meeting.attendees)
                const selectedAttendees = attendees.slice(0, 2)
                const otherAttendeesCount = attendees.length - 2

                return (
                  <div className="group flex flex-col gap-[12px]" key={key}>
                    <div className="flex items-center gap-[12px]">
                      <img src={purpleMessage} alt="" />
                      <div className="font-semibold text-purple-500">
                        {meeting.emails.length > 2 ? 'Conference' : '1:1'}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Link to={`${MEETINGS}/${meeting.mid}`} className="sm:text-[20px] text-[15px] font-semibold">
                        {meeting.title}
                      </Link>
                      <button
                        onClick={() => {
                          setMid(meeting.mid)
                          setOpenModal(true)
                        }}
                        className="rounded-full sm:w-[40px] sm:h-[40px] w-[30px] h-[30px] flex justify-center items-center bg-gray-100 group-hover:visible sm:invisible visible"
                      >
                        <img src={exitArrow} alt="" />
                      </button>
                    </div>
                    <div className="text-[15px] font-semibold flex items-center text-gray-500">
                      <div className="mr-[16px]">
                        {getTime(meeting.start)} - {getTime(meeting.end)}
                      </div>
                      <div className="flex mr-[8px]">
                        {selectedAttendees.map((attendee, key) => (
                          <UserAvatar
                            className="border-solid border-[4px] border-white first:ml-0 ml-[-8px]"
                            key={key}
                            name={attendee.name}
                            email={attendee.email}
                            avatar={attendee.avatar}
                          />
                        ))}
                      </div>
                      <div>{displayNames(selectedAttendees, otherAttendeesCount)}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <h5 className="font-semibold sm:mb-[12px] mb-[9px]">Share meeting recap</h5>
        <p className="sm:mb-[22px] mb-[15px] text-[#69707A]">
          Participants of this meeting have automatically been notified about these notes via email. But, you can share
          again!
        </p>
        <div className="flex flex-col sm:gap-[22px] gap-[15px]">
          <form className="grow flex w-full sm:gap-[12px] gap-[9px]" onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="john@doe.com, jane@brown"
              {...register('emails')}
              className={`grow sm:rounded-[12px] rounded-[9px] bg-white border-[2px] border-solid ${
                errors.emails ? 'border-red-500' : 'border-gray-200'
              } sm:px-[12px] px-[9px] sm:py-[8px] py-[6px] sm:text-[15px] text-[12px]`}
            />
            <button
              type="submit"
              className={`${
                isSubmitting ? 'bg-gray-300' : 'bg-gray-950'
              } text-white sm:rounded-[12px] rounded-[9px] sm:px-[13.5px] px-[9px] sm:py-[8px] py-[6px] sm:text-[15px] text-[12px]`}
            >
              Share
            </button>
          </form>
          <div className="flex items-center">
            <div className="h-[2px] bg-[#F1F3F5] w-full" />
            <div className="px-[10px] text-[#A4AAB2]">or</div>
            <div className="h-[2px] bg-[#F1F3F5] w-full" />
          </div>
          <button
            type="submit"
            className={`flex justify-center items-center gap-[6px] bg-gray-100 font-semibold sm:rounded-[12px] rounded-[9px] sm:px-[13.5px] px-[9px] sm:py-[8px] py-[6px] sm:text-[15px] text-[12px]`}
          >
            <img src={link} alt="" />
            Copy Link
          </button>
        </div>
      </Modal>
    </>
  )
}
