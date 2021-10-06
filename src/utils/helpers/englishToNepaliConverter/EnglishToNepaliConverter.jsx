import { nepaliEnglishNumerals } from '../../../global/constants/dummyData'

export function EnglishToNepaliConverter(number) {
    let remainder
    const result = []

    if (number > 9) {
        while (number > 0) {
            remainder = number % 10
            result.push(nepaliEnglishNumerals[remainder])
            number = Math.trunc(number / 10)
        }
        return result.reverse().join('')
    } else {
        return nepaliEnglishNumerals[number]
    }
}
