import './shareMarket.scss'

import TradeCard from './TradeCard/TradeCard'

import { CurrencyFormatter } from 'utils/helpers/CurrencyFormatter'
import { EnglishToNepaliConverter } from 'utils/helpers/englishToNepaliConverter/EnglishToNepaliConverter'
import DateField from './DateField/DateField'

const ShareMarket = () => {
    return (
        <div className="container">
            <div className="share-market-container">
                {/* Title section */}
                <h2 className="share-market-title">शेयर बजार</h2>
                {/* Today's trades section */}
                <section className="share-market-todays-trades">
                    <div className="share-market-todays-trades-headings">
                        <h3 className="share-market-todays-trades-title">
                            नियमित ट्रेडिंग
                        </h3>
                    </div>
                    <div className="increment-decrement-cards-container">
                        <TradeCard
                            // styles={stylesOne}
                            isRed={true}
                            organizationName="नेप्से"
                            shareData={EnglishToNepaliConverter(
                                CurrencyFormatter(2878.46)
                            )}
                            numericalData={EnglishToNepaliConverter('+1.88')}
                            percentageData={EnglishToNepaliConverter('+0.07%')}
                        />
                        <TradeCard
                            // styles={stylesTwo}
                            isRed={false}
                            organizationName="SENSITIVE"
                            shareData={EnglishToNepaliConverter(
                                CurrencyFormatter(573.63)
                            )}
                            numericalData={EnglishToNepaliConverter('-0.29')}
                            percentageData={EnglishToNepaliConverter('-0.04%')}
                            rotateTriangle="rotate(-180deg)"
                        />
                    </div>
                    <div className="share-values-container">
                        <p className="share-value-positive">{`शेयर मात्रा : ${EnglishToNepaliConverter(
                            CurrencyFormatter(12725846)
                        )}`}</p>
                        <p className="share-value-negative">{`कारोबार : ${EnglishToNepaliConverter(
                            CurrencyFormatter(6156690780)
                        )}`}</p>
                    </div>
                </section>
                {/* NEPSE index section */}
                <section className="nepse-index-section">
                    <h3 className="nepse-index-heading">नेप्से सूचकांक</h3>
                    <div className="date-field-container">
                        <DateField date="भदौ २३, २०७८" />
                        <DateField date="भदौ २३, २०७८" />
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ShareMarket
