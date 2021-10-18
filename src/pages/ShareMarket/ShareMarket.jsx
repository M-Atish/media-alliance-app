import './shareMarket.scss'

import TradeCard from './TradeCard/TradeCard'

import { COLORS } from './../../assets/designTokens/colors'

import { CurrencyFormatter } from '../../utils/helpers/CurrencyFormatter'
import { EnglishToNepaliConverter } from '../../utils/helpers/englishToNepaliConverter/EnglishToNepaliConverter'

const ShareMarket = () => {
    const stylesOne = {
        backgroundColor: COLORS.cardThemeGreen,
        margin: '0 1em 0 0',
    }

    const stylesTwo = {
        backgroundColor: COLORS.redTheme,
    }

    return (
        <div className="container">
            <div className="share-market-container">
                <div className="share-market-heading">
                    <h3 className="share-market-title">शेयर बजार</h3>
                </div>
                <div className="share-market-todays-trades">
                    <div className="share-market-todays-trades-headings">
                        <h4 className="share-market-todays-trades-title">
                            नियमित ट्रेडिंग
                        </h4>
                    </div>
                    <div className="increment-decrement-cards-container">
                        <TradeCard
                            styles={stylesOne}
                            organizationName="नेप्से"
                            shareData={EnglishToNepaliConverter(
                                CurrencyFormatter(2878.46)
                            )}
                            numericalData={EnglishToNepaliConverter('+1.88')}
                            percentageData={EnglishToNepaliConverter('+0.07%')}
                        />
                        <TradeCard
                            styles={stylesTwo}
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
                </div>
            </div>
        </div>
    )
}

export default ShareMarket
