const nepaliDateObj = {
    singular: {
        'second ago': 'सेकेन्ड अघि',
        'minute ago': 'मिनेट अघि',
        'hour ago': 'घण्टा अघि',
        'day ago': 'दिन अघि',
        'month ago': 'महिना अघि',
        'year ago': 'वर्ष अघि',
    },
    plural: {
        'seconds ago': 'सेकेन्डहरु अघि',
        'minutes ago': 'मिनेटहरु अघि',
        'hours ago': 'घण्टाहरु अघि',
        'days ago': 'दिनहरु अघि',
        'months ago': 'महिनाहरु अघि',
        'years ago': 'वर्षहरु अघि',
    },
}

export default function nepaliDateFormatter(dateToBeConverted, dateNumber) {
    dateToBeConverted = String(dateToBeConverted).trim()

    if (dateNumber === 1) {
        return nepaliDateObj.singular[dateToBeConverted.toLowerCase()]
    }

    return nepaliDateObj.plural[dateToBeConverted.toLowerCase()]
}
