import { tagIconImg } from '../../assets'

import { useState, useRef } from 'react'

import './newsarticle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import EllipseMenu from '../../components/Layout/EllipseMenu/EllipseMenuContainer/EllipseMenu'

import { ClickOutside } from '../../utils/helpers/clickOutside/ClickOutside'

const NewsArticle = ({
    newsAgency,
    newsAgencyIcon,
    title,
    tags,
    date,
    image,
}) => {
    const [optionMenuClicked, setOptionMenuClicked] = useState(false)

    const handleOptionMenuClicked = (e) => {
        setOptionMenuClicked(!optionMenuClicked)
    }

    const wrapperRef = useRef('menu')

    ClickOutside(wrapperRef, () => {
        setOptionMenuClicked(false)
    })

    return (
        <div className="news-article-container">
            {image && (
                <img
                    src={image}
                    alt="particular news"
                    className="news-article-image"
                />
            )}
            <div className="news-article-text-container">
                <div className="news-agency-text">
                    <span>
                        <img
                            src={newsAgencyIcon}
                            alt="Logo of the news agency"
                            className="news-agency-icon"
                        />
                    </span>
                    {newsAgency} <p className="news-date">{date}</p>
                </div>
                <div className="news-article-title">{title}</div>
                <div className="news-article-bottom-container">
                    <div className="news-article-tags">
                        <span>
                            <img src={tagIconImg} alt="Icon of tags" />
                        </span>
                        {tags.map((tag, index) => (
                            <p className="news-article-tag" key={index}>
                                {tag}
                            </p>
                        ))}
                    </div>
                    <div ref={wrapperRef}>
                        <EllipseMenu active={optionMenuClicked} />
                    </div>
                    <div
                        className="extra-options"
                        onClick={handleOptionMenuClicked}
                    >
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsArticle
