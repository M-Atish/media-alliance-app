import './currencyConverter.scss'
import ReactSelect, { Components } from '../../components/ReactSelect'

import { useState } from 'react'

import { EnglishToNepaliConverter } from '../../utils/helpers/englishToNepaliConverter/EnglishToNepaliConverter'

// Constants
import { countryDetails, countryFlags } from '../../global/constants/dummyData'
import { NepaliNumberValidator } from './../../utils/helpers/nepaliNumberValidator/NepaliNumberValidator'

const CurrencyConverter = () => {
    const [currencyInputNumberOne, setCurrencyInputNumberOne] = useState('')
    const [currencyInputNumberTwo, setCurrencyInputNumberTwo] = useState('')
    const countryOptions = []

    const handleOnChangeCurrencyNumberOne = (e) => {
        setCurrencyInputNumberOne(
            currencyInputNumberOne.replace(
                currencyInputNumberOne,
                NepaliNumberValidator(EnglishToNepaliConverter(e.target.value))
            )
        )
    }

    const handleOnChangeCurrencyNumberTwo = (e) => {
        setCurrencyInputNumberTwo(
            currencyInputNumberTwo.replace(
                currencyInputNumberTwo,
                NepaliNumberValidator(EnglishToNepaliConverter(e.target.value))
            )
        )
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
                {/* Make the input field's state different from the above input field's state */}
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
