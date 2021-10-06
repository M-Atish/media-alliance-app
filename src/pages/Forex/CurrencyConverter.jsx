import './currencyConverter.scss'
import ReactSelect, { Components } from '../../components/ReactSelect'

// Constants
import { countryDetails, countryFlags } from '../../global/constants/dummyData'

const CurrencyConverter = () => {
    const countryOptions = []

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
                />
            </div>
            <div className="selector-two">
                <ReactSelect
                    options={countryOptions}
                    components={{
                        Option: Components.Option,
                        SingleValue: Components.SingleValue,
                    }}
                />
            </div>
        </div>
    )
}

export default CurrencyConverter
