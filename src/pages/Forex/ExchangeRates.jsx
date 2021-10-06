import './exchangeRates.scss'

// Constants
import { countryDetails } from '../../global/constants/dummyData'

const ExchangeRates = () => {
    return (
        <table className="exchange-rate-container">
            {/* Headings section */}
            <thead>
                <tr className="exchange-rate-headings">
                    <th className="first-heading">विदेशी विनिमय</th>
                    <th>खरिद दर</th>
                    <th>बिक्री दर</th>
                </tr>
            </thead>
            {/* Exchange rate list section */}
            <tbody>
                {countryDetails.map((country, index) => (
                    <tr>
                        <td className="exchange-rate-body-left" key={index}>
                            <span
                                className={`flag flag--${country.ISO3}`}
                            ></span>
                            <div className="exchange-rate-list-left-text">
                                <div className="exchange-rate-list-left-text-heading">
                                    <h4>{country.ISO3}</h4>
                                    <span className="conditional-for-each-amount">
                                        {country.unit}
                                    </span>
                                </div>
                                <span className="country-full-name">
                                    {country.fullName}
                                </span>
                            </div>
                        </td>
                        <td>{country.buyAmount}</td>
                        <td>{country.sellAmount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ExchangeRates
