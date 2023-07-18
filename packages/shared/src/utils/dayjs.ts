import _dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import weekOfYear from 'dayjs/plugin/weekOfYear'

// You should extend Day.js with the plugins before using them
_dayjs.extend(relativeTime)
_dayjs.extend(utc)
_dayjs.extend(timezone)
_dayjs.extend(advancedFormat)
_dayjs.extend(duration)
_dayjs.extend(weekOfYear)

export const dayjs = _dayjs

export { advancedFormat, duration, relativeTime, timezone, utc, weekOfYear }

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
