import './mostRead.scss'

import { useState, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import EllipseMenu from '../../components/Layout/EllipseMenu/EllipseMenuContainer/EllipseMenu'
import { ClickOutside } from '../../utils/helpers/clickOutside/ClickOutside'

import { EnglishToNepaliConverter } from '../../utils/helpers/englishToNepaliConverter/EnglishToNepaliConverter'

const MostRead = ({ title, newsAgency, newsAgencyIcon, rank }) => {
    const [ellipseClicked, setEllipseClicked] = useState(false)

    const handleClickEllipse = (e) => {
        setEllipseClicked(!ellipseClicked)
    }

    const wrapperRef = useRef('menu')

    ClickOutside(wrapperRef, () => {
        setEllipseClicked(false)
    })

    return (
        <div className="item-container">
            <h3 className="rank-number">{EnglishToNepaliConverter(rank)}</h3>
            <div className="item-details">
                <h4 className="item-title">{title}</h4>
                <div className="item-bottom-section">
                    <p className="item-bottom-section-desc">
                        <span>
                            <img
                                src={newsAgencyIcon}
                                className="item-bottom-section-icon"
                                alt="Icon of concerned news agency"
                            />
                        </span>
                        {newsAgency}
                    </p>
                    <div ref={wrapperRef}>
                        <EllipseMenu
                            active={ellipseClicked}
                            className=""
                            top="-3.125em"
                        />
                    </div>
                    <FontAwesomeIcon
                        icon={faEllipsisV}
                        className="option-ellipse"
                        onClick={handleClickEllipse}
                    />
                </div>
            </div>
        </div>
    )
}

export default MostRead
