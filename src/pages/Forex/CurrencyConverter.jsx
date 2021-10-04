import './currencyConverter.scss'
import ReactSelect, { Components } from '../../components/ReactSelect'
import {
    AEDImg,
    AUDImg,
    BHDImg,
    CADImg,
    CHFImg,
    CNYImg,
    DKKImg,
    EURImg,
    GBPImg,
    HKDImg,
    INRImg,
    JPYImg,
    KRWImg,
    KWDImg,
    MYRImg,
    NEPImg,
    QARImg,
    SARImg,
    SEKImg,
    SGDImg,
    THBImg,
    USDImg,
} from '../../assets'

const CurrencyConverter = () => {
    const countryDetails = [
        {
            ISO3: 'AED',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'AUD',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'BHD',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'CAD',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'CHF',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'CNY',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'DKK',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'EUR',
            unit: 'प्रति १० एकाइ',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'GBP',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'HKD',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'INR',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'JPY',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'KRW',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'KWD',
            unit: 'प्रति १०० एकाइ',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'MYR',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'NEP',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'QAR',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'SAR',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'SEK',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'SGD',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'THB',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
        {
            ISO3: 'USD',
            unit: '',
            fullName: 'संयुक्त राज्य डलर',
            buyAmount: '११७.१८',
            sellAmount: '११७.७८',
        },
    ]

    const countryFlags = [
        AEDImg,
        AUDImg,
        BHDImg,
        CADImg,
        CHFImg,
        CNYImg,
        DKKImg,
        EURImg,
        GBPImg,
        HKDImg,
        INRImg,
        JPYImg,
        KRWImg,
        KWDImg,
        MYRImg,
        NEPImg,
        QARImg,
        SARImg,
        SEKImg,
        SGDImg,
        THBImg,
        USDImg,
    ]

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
