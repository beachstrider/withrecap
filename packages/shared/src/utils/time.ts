import { format, formatDistance, formatRelative, parse } from 'date-fns'
import { enUS } from 'date-fns/locale'

/**
 * Extracts time from a date and formats it. E.g. 9:00 AM
 */
export const getTime = (date: string): string => {
  return format(new Date(date), 'h:mm a')
}

/**
 * Convert 2 timestamp inputs to proper format. E.g. Mon, Apr 17  01:00 AM - 03:00 AM
 */
export const getTimeRange = (start: string, end: string) => {
  const startTime = new Date(start)
  const endTime = new Date(end)
  return format(startTime, 'EEE, MMM dd \u00A0\u00A0 hh:mm aa - ') + format(endTime, 'hh:mm aa')
}

/**
 * Get time difference from 2 timestamp inputs. E.g. about 2 hours
 */
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

  const dateObject = parse(date, 'MM-dd-yy', new Date())

  // See: https://date-fns.org/v2.29.3/docs/format
  return {
    weekDay: format(dateObject, 'EEE'),
    day: format(dateObject, 'd'),
    relativeDate: formatRelative(dateObject, new Date(), { locale })
  }
}
