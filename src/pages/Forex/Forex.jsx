import './forex.scss'

import CurrencyConverter from './CurrencyConverter'
import ExchangeRates from './ExchangeRates'

const Forex = () => {
    return (
        <div className="container">
            <div className="forex-container">
                <div className="forex-title-container">
                    <h2 className="forex-title">विदेशी मुद्रा</h2>
                </div>
                <CurrencyConverter />
                <ExchangeRates />
            </div>
        </div>
    )
}

export default Forex
