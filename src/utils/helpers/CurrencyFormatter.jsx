export function CurrencyFormatter(num) {
    return new Intl.NumberFormat('en-IN').format(num)
}
