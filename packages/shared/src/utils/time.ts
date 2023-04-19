import { format, formatDistance, formatRelative } from 'date-fns'
import { enUS } from 'date-fns/locale'

// Convert 2 timestamp inputs to proper format, ex; Mon, Apr 17  01:00 AM - 03:00 AM
export const getTimeRange = (start: string, end: string) => {
  const startTime = new Date(start)
  const endTime = new Date(end)
  return format(startTime, 'EEE, MMM dd \u00A0\u00A0 hh:mm aa - ') + format(endTime, 'hh:mm aa')
}

// Get time difference from 2 timestamp inputs, ex; about 2 hours
export const getTimeDiff = (start: string, end: string) => {
  const startTime = new Date(start)
  const endTime = new Date(end)
  return formatDistance(startTime, endTime)
}

export const getFormattedDate = (date: string): { weekDay: string; day: string; relativeDate: string } => {
  // See: https://github.com/date-fns/date-fns/issues/1218
  const formatRelativeLocale: { [token: string]: string } = {
    lastWeek: "'Last' eeee",
    yesterday: "'Yesterday'",
    today: "'Today'",
    other: 'dd.MM.yyyy'
  }

  const locale = {
    ...enUS,
    formatRelative: (token: string) => formatRelativeLocale[token]
  }

  // See: https://date-fns.org/v2.29.3/docs/format
  return {
    weekDay: format(new Date(date), 'EEE'),
    day: format(new Date(date), 'd'),
    relativeDate: formatRelative(new Date(date), new Date(), { locale })
  }
}
