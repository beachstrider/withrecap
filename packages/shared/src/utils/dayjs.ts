import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import weekOfYear from 'dayjs/plugin/weekOfYear'

// You should extend Day.js with the plugins before using them
dayjs.extend(relativeTime)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(advancedFormat)
dayjs.extend(duration)
dayjs.extend(weekOfYear)

export { dayjs }

export const getTime = (date: string): string => {
  return dayjs(date).format('h:mm A')
}

export const getTimeRange = (start: string, end: string) => {
  return `${dayjs(start).format('ddd, MMM DD  hh:mm A')} - ${dayjs(end).format('hh:mm A')}`
}

export const getTimeDiff = (start: string, end: string): string => {
  return dayjs(start).to(dayjs(end))
}

export const getFormattedDate = (date: string): { weekDay: string; day: string; relativeDate: string } => {
  return {
    weekDay: dayjs(date).format('ddd'),
    day: dayjs(date).format('D'),
    relativeDate: dayjs(date).fromNow()
  }
}

export const isThisWeek = (date: Date | string) =>
  dayjs().week() === dayjs(date).week() && dayjs().year() === dayjs(date).year()
