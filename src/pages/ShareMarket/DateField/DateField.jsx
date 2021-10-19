import './dateField.scss'

import { shareMarketCalendarImg } from '../../../assets'

const DateField = ({ date }) => {
    return (
        <div className="share-market-date-field-container">
            <p className="share-market-date">{date}</p>
            <img src={shareMarketCalendarImg} alt="Calendar outline" />
        </div>
    )
}

export default DateField
