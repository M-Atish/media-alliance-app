import './currencyConverter.scss'
import ReactSelect, { Components } from 'components/ReactSelect'

import { useState } from 'react'

import { EnglishToNepaliConverter } from 'utils/helpers/englishToNepaliConverter/EnglishToNepaliConverter'

// Constants
import { countryDetails, countryFlags } from 'global/constants/dummyData'
import { NepaliNumberValidator } from 'utils/helpers/nepaliNumberValidator/NepaliNumberValidator'
import { IsItemDuplicate } from 'utils/helpers/isItemDuplicate/IsItemDuplicate'

const CurrencyConverter = () => {
    // Please do note that the state values will be stored in string data type, so to feed it to the api, you have to convert it to float (number) type.
    const [currencyInputNumberOne, setCurrencyInputNumberOne] = useState('')
    const [currencyInputNumberTwo, setCurrencyInputNumberTwo] = useState('')
    const countryOptions = []

    const handleOnChangeCurrencyNumberOne = (e) => {
        const newValueArrOne = e.target.value.split('')

        if (IsItemDuplicate(newValueArrOne, '.')) return

        // Validates whether a comma is there after a decimal point or not

        try {
            let firstHalf = e.target.value.split('.')[0]

            let secondHalf = e.target.value.split('.')[1].replaceAll(',', '')

            e.target.value = firstHalf + '.' + secondHalf
        } catch (error) {
            // do nothing
        }

        setCurrencyInputNumberOne(
            currencyInputNumberOne.replace(
                currencyInputNumberOne,
                NepaliNumberValidator(EnglishToNepaliConverter(e.target.value))
            )
        )
    }

    const handleOnChangeCurrencyNumberTwo = (e) => {
        const newValueArrTwo = e.target.value.split('')

        if (IsItemDuplicate(newValueArrTwo, '.')) return

        // Validates whether a comma is there after a decimal point or not

        try {
            let firstHalf = e.target.value.split('.')[0]

            let secondHalf = e.target.value.split('.')[1].replaceAll(',', '')

            e.target.value = firstHalf + '.' + secondHalf
        } catch (error) {
            // do nothing
        }

        setCurrencyInputNumberTwo(() => {
            return currencyInputNumberTwo.replace(
                currencyInputNumberTwo,
                NepaliNumberValidator(EnglishToNepaliConverter(e.target.value))
            )
        })
    }

    countryDetails.map((country, index) =>
        countryOptions.push({
            label: country.ISO3,
            icon: countryFlags[index],
            value: index,
        })
    )

    return (
        <div className="currency-converter-container">
            <div className="selector-one">
                <ReactSelect
                    options={countryOptions}
                    components={{
                        Option: Components.Option,
                        SingleValue: Components.SingleValue,
                    }}
                    className="react-select-one"
                />
                <input
                    type="text"
                    className="currency-input-number-field"
                    onChange={handleOnChangeCurrencyNumberOne}
                    value={currencyInputNumberOne}
                />
            </div>
            <div className="selector-two">
                <ReactSelect
                    options={countryOptions}
                    components={{
                        Option: Components.Option,
                        SingleValue: Components.SingleValue,
                    }}
                    className="react-select-two"
                />
                <input
                    type="text"
                    className="currency-input-number-field"
                    onChange={handleOnChangeCurrencyNumberTwo}
                    value={currencyInputNumberTwo}
                />
            </div>
        </div>
    )
}

export default CurrencyConverter
