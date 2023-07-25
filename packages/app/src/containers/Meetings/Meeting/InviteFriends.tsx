import { useEffect, useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import { sendInviteEmails, toast } from '@recap/shared'

import { Button } from '../../../components/buttons'
import { Modal } from '../../../components/display/Modal'

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

export default function InviteFriends() {
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
      await sendInviteEmails({ emails })

      setOpenModal(false)
      toast.success('Invitation emails sent.')
    } catch (err) {
      toast.error('Failed to send invitation emails', err)
    }
  }

  useEffect(() => {
    reset()
  }, [reset, openModal])

  return (
    <div className="flex">
      <Button onClick={() => setOpenModal(true)}>
        <img src={gift} alt="" className="w-[16px] h-[16px]" />
        Help a friend save time
      </Button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <h5 className="font-semibold sm:mb-[12px] mb-[8px]">Send Recap invitation email</h5>
        <p className="sm:mb-[22px] mb-[14px] text-[#69707A]">Enter a list of emails (comma separated)</p>
        <form className="grow flex flex-col w-full sm:gap-[30px] gap-[20px]" onSubmit={handleSubmit(onSubmit)}>
          <textarea
            {...register('emails')}
            rows={4}
            className={`grow sm:rounded-[12px] rounded-[9px] bg-white border-[2px] border-solid ${
              errors.emails ? 'border-red-500' : 'border-gray-200'
            } sm:px-[12px] px-[9px] sm:py-[8px] py-[6px] sm:text-[15px] text-[12px]`}
            placeholder="john@doe.com, jane@brown"
          />
          <button
            type="submit"
            className={`${
              isSubmitting ? 'bg-gray-300' : 'bg-gray-950'
            } text-white sm:rounded-[12px] rounded-[9px] sm:px-[13.5px] px-[9px] sm:py-[8px] py-[6px] sm:text-[15px] text-[12px]`}
          >
            Send
          </button>
        </form>
      </Modal>
    </div>
  )
}
