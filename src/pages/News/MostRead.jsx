import "./mostRead.scss";

import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const MostRead = ({ title, newsAgency, newsAgencyIcon, rank }) => {
    const [ellipseClicked, setEllipseClicked] = useState(false);

    const handleClickEllipse = (event) => {
        setEllipseClicked(!ellipseClicked);
    }

    return (
        <div className="item-container">
            <h3 className="rank-number">{rank}</h3>
            <div className="item-details">
                <h4 className="item-title">{title}</h4>
                <div className="item-bottom-section">
                    <p className="item-bottom-section-desc"><span><img src={newsAgencyIcon} className="item-bottom-section-icon" alt="Icon of concerned news agency" /></span>{newsAgency}</p>
                    <FontAwesomeIcon icon={faEllipsisV} className="option-ellipse" onClick={handleClickEllipse}/>
                </div>
            </div>
        </div>
    )
}

export default MostRead;