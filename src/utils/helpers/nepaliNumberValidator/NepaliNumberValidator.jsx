let numberOfNepaliCharacters = 128
let unicodeShift = 0x0900
let NepaliAlphabet = []
for (let i = 0; i < numberOfNepaliCharacters; i++) {
    NepaliAlphabet.push('\\u0' + (unicodeShift + i).toString(16))
}

let regex = new RegExp('(?:^|)[' + NepaliAlphabet.join('') + ',.]+?(?:|$)', 'g')

export function NepaliNumberValidator(item) {
    let result = ''

    item = String(item)

    // why the fuck is this not working
    try {
        item.match(regex).forEach(
            (matchedExpression) => (result += matchedExpression)
        )
    } catch (error) {
        // do nothing
    }

    return result
}
