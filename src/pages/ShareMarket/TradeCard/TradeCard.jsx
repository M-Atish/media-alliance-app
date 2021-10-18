import './tradeCard.scss'

import { shareMarketTriangleImg } from '../../../assets'

const TradeCard = ({
    styles,
    organizationName,
    shareData,
    numericalData,
    percentageData,
    rotateTriangle,
}) => {
    return (
        <div className="trade-card" style={{ ...styles }}>
            <div className="trade-card-container">
                <div className="trade-card-top-container">
                    <div className="organization-name">{organizationName}</div>
                    <div className="triangle-right-container">
                        <img
                            src={shareMarketTriangleImg}
                            alt="White triangle"
                            className="triangle-right"
                            style={{
                                transform: rotateTriangle ? rotateTriangle : '',
                            }}
                        />
                    </div>
                </div>
                <div className="trade-card-middle-container">
                    <p className="share-data">{shareData}</p>
                </div>
                <div className="trade-card-bottom-container">
                    <p className="numberical-status">{numericalData}</p>
                    <p className="percentage-status">{percentageData}</p>
                </div>
            </div>
        </div>
    )
}

export default TradeCard
