import React, { useEffect, useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { sendInviteEmails, toast } from '@recap/shared'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Button } from '../../buttons'
import { Modal } from '../../display/Modal'

import gift from '../../../assets/img/Gift.svg'

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

export default function MeetingTimeSaved() {
  const [savingTime] = useState(8)
  const [openModal, setOpenModal] = useState<boolean>(false)

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Form>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: Form) => {
    try {
      // Convert string type emails separated by comma to email array
      const emails = data.emails.split(',').map((email) => email.trim())

      await sendInviteEmails({ emails })

      setOpenModal(false)
      toast.success("We've sent an invitation email to the emails!")
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    reset()
  }, [reset, openModal])

  return (
    <div className="flex sm:flex-row flex-col sm:items-center gap-[24px]">
      <div className="text-[16px]">Recap saved you {savingTime} hours of meeting notes this week!</div>
      <div className="flex">
        <Button onClick={() => setOpenModal(true)}>
          <img src={gift} alt="" className="w-[16px] h-[16px]" />
          Help a friend save time
        </Button>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <h5 className="font-semibold mb-[20px]">Send Recap invitation email to multiple users.</h5>
          <form className="grow flex flex-col w-full gap-[14px]" onSubmit={handleSubmit(onSubmit)}>
            <textarea
              {...register('emails')}
              rows={4}
              className={`grow rounded-[12px] bg-white border-[2px] border-solid ${
                errors.emails ? 'border-red-500' : 'border-gray-200'
              }  px-[12px] py-[8px] text-[15px]`}
              placeholder="john@doe.com, jane@brown"
            />
            <button
              type="submit"
              className={`${
                isSubmitting ? 'bg-gray-300' : 'bg-gray-950'
              } text-white rounded-[12px] px-[13.5px] py-[8px] text-[15px]`}
            >
              Send
            </button>
          </form>
        </Modal>
      </div>
    </div>
  )
}
