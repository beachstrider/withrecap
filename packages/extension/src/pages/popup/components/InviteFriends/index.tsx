import React, { useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { sendInviteEmails } from '@recap/shared'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import gift from '../../../../assets/img/gift.svg'

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

export const InviteFriends = () => {
  const [status, setStatus] = useState<'inactive' | 'active' | 'done'>('inactive')

  const {
    register,
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
      setStatus('done')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <hr className="my-[24px] bg-gray-100" />
      <div className="flex flex-col items-start">
        <h6 className="mb-[8px]">Invite Friends</h6>
        {status === 'inactive' && (
          <>
            <p className="text-gray-500 mb-[18px]">Recap saved you 8 hours of meeting notes.</p>
            <button
              onClick={() => setStatus('active')}
              className={`text-[15px] flex items-center gap-[6px] px-[10px] py-[6px] font-semibold bg-gray-100 rounded-[12px]`}
            >
              <img src={gift} alt="" className="w-[16px] h-[16px]" />
              Help a friend save time
            </button>
          </>
        )}
        {status === 'active' && (
          <form className="grow flex flex-col w-full gap-[14px]" onSubmit={handleSubmit(onSubmit)}>
            <textarea
              {...register('emails')}
              rows={1}
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
        )}
        {status === 'done' && <div className="text-[15px]">We've sent an invitation to the emails!</div>}
      </div>
    </div>
  )
}
