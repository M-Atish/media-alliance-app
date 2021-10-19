import { tagIconImg } from '../../assets'

import { useState, useRef } from 'react'

import './newsarticle.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import EllipseMenu from '../../components/Layout/EllipseMenu/EllipseMenuContainer/EllipseMenu'

import { ClickOutside } from '../../utils/helpers/clickOutside/ClickOutside'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
import { routePaths } from '../../global/constants/routePaths'

const NewsArticle = ({
    newsAgency,
    newsAgencyIcon,
    title,
    tags,
    date,
    image,
    key,
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
            <Link
                to={routePaths.news.details.replace('{idNumber}', nanoid())}
                className="news-article-image-link"
            >
                {image && (
                    <img
                        src={image}
                        alt="particular news"
                        className="news-article-image"
                    />
                )}
            </Link>

            <div className="news-article-text-container">
                <Link
                    to={routePaths.news.details.replace('{idNumber}', nanoid())}
                    className="news-article-text-link"
                >
                    <div className="news-agency-text">
                        {/* na means News Agency */}
                        <div className="top-na-date">
                            <span>
                                <img
                                    src={newsAgencyIcon}
                                    alt="Logo of the news agency"
                                    className="news-agency-icon"
                                />
                            </span>
                            {newsAgency}
                        </div>
                        <p className="news-date">{date}</p>
                    </div>
                    <div className="news-article-title">{title}</div>
                </Link>
                <div className="tags-ellipse-option">
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
