import intervalToDuration from 'date-fns/intervalToDuration'
import { EnglishToNepaliConverter } from './helpers/englishToNepaliConverter/EnglishToNepaliConverter'
import nepaliDateFormatter from './helpers/nepaliDateFormatter/nepaliDateFormatter'

export default function convertToRelativeTime(updatedDate) {
    let currentDate = new Date()

    let finalDate = intervalToDuration({ start: updatedDate, end: currentDate })
    let finalDateAttachment = ''

    if (finalDate.years !== 0) {
        finalDate = finalDate.years
        finalDateAttachment = 'years ago'
    } else if (finalDate.months !== 0) {
        finalDate = finalDate.months
        finalDateAttachment = 'months ago'
    } else if (finalDate.days !== 0) {
        finalDate = finalDate.days
        finalDateAttachment = 'days ago'
    } else if (finalDate.hours !== 0) {
        finalDate = finalDate.hours
        finalDateAttachment = 'hours ago'
    } else if (finalDate.minutes !== 0) {
        finalDate = finalDate.minutes
        finalDateAttachment = 'minutes ago'
    } else {
        finalDate = finalDate.seconds
        finalDateAttachment = 'seconds ago'
    }

    return `${EnglishToNepaliConverter(finalDate)} ${nepaliDateFormatter(
        finalDateAttachment,
        finalDate
    )}`
}
