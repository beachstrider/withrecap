import { Request, Response } from 'express'

import { Entries, Entry } from './repository'

// TODO: Add body validation with zod
export const addEntry = async (req: Request, res: Response) => {
  const meetingId = req.params['meetingId']

  const entries = new Entries(meetingId)
  const entry = req.body as Entry

  try {
    await entries.insert(entry)

    res.status(200).send({
      status: 'success'
    })
  } catch (error) {
    res.status(500).json((error as Error).message)
  }
}
