export function IsItemDuplicate(array, duplicateValue) {
    let dotCount = 0
    const newValue = array
    newValue.forEach((item) => {
        if (item === duplicateValue) dotCount++
    })

    if (dotCount > 1) return true

    return false
}
