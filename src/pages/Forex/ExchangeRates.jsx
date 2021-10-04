import "./exchangeRates.scss";

const ExchangeRates = () => {
    const country_details = [
        {
            "ISO3":"USD",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"EUR",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"GBP",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"AUD",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"CHF",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"CAD",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"SGD",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"JPY",
            "unit":"प्रति १० एकाइ",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"CNY",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"QAR",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"THB",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"AED",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"MYR",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"KRW",
            "unit":"प्रति १०० एकाइ",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"SEK",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"DKK",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"KWD",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"BHD",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        },
        {
            "ISO3":"INR",
            "unit":"",
            "fullName":"संयुक्त राज्य डलर",
            "buyAmount":"११७.१८",
            "sellAmount":"११७.७८"
        }
    ]
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
                {country_details.map((country) => (
                    <tr>
                        <td className="exchange-rate-body-left">
                            <span className={`flag flag--${country.ISO3}`}>
                            </span>
                            <div className="exchange-rate-list-left-text">
                                <div className="exchange-rate-list-left-text-heading">
                                    <h4>{country.ISO3}</h4>
                                    <span className="conditional-for-each-amount">{country.unit}</span>
                                </div>
                                <span className="country-full-name">{country.fullName}</span>
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
