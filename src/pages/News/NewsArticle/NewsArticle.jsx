import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import './newsarticle.scss'

import { tagIconImg, tripleEllipseImg } from 'assets'
import EllipseMenu from 'components/Layout/EllipseMenu/EllipseMenuContainer/EllipseMenu'
import { routePaths } from 'global/constants/routePaths'
import { ClickOutside } from 'utils/helpers/clickOutside/ClickOutside'
import convertToRelativeTime from 'utils/convertToRelativeTime'

const NewsArticle = ({
    showDesc,
    newsAgency,
    newsAgencyIcon,
    title,
    tags,
    date,
    image,
    newsLink,
    id,
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
                to={routePaths.news.details.replace(
                    '{idNumber}',
                    encodeURIComponent(String(id))
                )}
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
                    to={routePaths.news.details.replace('{idNumber}', id)}
                    className="news-article-text-link"
                >
                    <div className="news-agency-text">
                        {/* na means News Agency */}
                        <div className="top-na-date">
                            <span>
                                {newsAgencyIcon && (
                                    <img
                                        src={newsAgencyIcon}
                                        alt="Logo of the news agency"
                                        className="news-agency-icon"
                                    />
                                )}
                            </span>
                            {newsAgency}
                        </div>
                        <p className="news-date">
                            {date && convertToRelativeTime(new Date(date))}
                        </p>
                    </div>
                    <div className="news-article-title">{title}</div>
                </Link>
                <div className="tags-ellipse-option">
                    <div className="news-article-tags">
                        <span>
                            {tags && (
                                <img src={tagIconImg} alt="Icon of tags" />
                            )}
                        </span>
                        {tags
                            ? tags.map((tag, index) => (
                                  <p className="news-article-tag" key={index}>
                                      {tag}
                                  </p>
                              ))
                            : null}
                    </div>
                    <div ref={wrapperRef}>
                        <EllipseMenu active={optionMenuClicked} />
                    </div>
                    <div
                        className="extra-options"
                        onClick={handleOptionMenuClicked}
                    >
                        <img src={tripleEllipseImg} alt="triple ellipse dots" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsArticle
