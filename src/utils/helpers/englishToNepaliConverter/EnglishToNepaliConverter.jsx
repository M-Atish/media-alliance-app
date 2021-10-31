import { nepaliEnglishNumerals } from 'global/constants/dummyData'

export function EnglishToNepaliConverter(number) {
    // let remainder
    const result = []

    number = String(number)

    let extractedChar = ''

    // Please do note that nepaliEnglishNumerals is an object which contains keys of English numbers and values of their nepali equivalent strings
    if (number.length > 1) {
        for (let i of number) {
            extractedChar = nepaliEnglishNumerals[parseInt(i)]

            if (typeof extractedChar !== 'undefined') {
                result.push(extractedChar)
            } else {
                result.push(i)
            }
        }

        return result.join('')
    } else {
        return nepaliEnglishNumerals[parseInt(number)]
    }
}
