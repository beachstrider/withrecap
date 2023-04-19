import { format, formatDistance } from 'date-fns'

// Convert 2 timestamp inputs to proper format, ex; Mon, Apr 17  01:00 AM - 03:00 AM
export const getTimeRange = (start: string, end: string) => {
  let res = ''

  if (typeof start !== 'undefined' && typeof end !== 'undefined') {
    const startTime = new Date(start)
    const endTime = new Date(end)
    res = format(startTime, 'EEE, MMM dd \u00A0\u00A0 hh:mm aa - ') + format(endTime, 'hh:mm aa')
  }

  return res
}

// Get time difference from 2 timestamp inputs, ex; about 2 hours
export const getTimeDiff = (start: string, end: string) => {
  let res = ''

  if (typeof start !== 'undefined' && typeof end !== 'undefined') {
    const startTime = new Date(start)
    const endTime = new Date(end)
    res = formatDistance(startTime, endTime)
  }

  return res
}
