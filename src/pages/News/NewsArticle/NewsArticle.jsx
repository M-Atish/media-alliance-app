import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import { FaEllipsisH } from 'react-icons/fa'

import './newsarticle.scss'

import { tagIconImg } from 'assets'
import EllipseMenu from 'components/Layout/EllipseMenu/EllipseMenuContainer/EllipseMenu'
import { routePaths } from 'global/constants/routePaths'
import { ClickOutside } from 'utils/helpers/clickOutside/ClickOutside'
import convertToRelativeTime from 'utils/convertToRelativeTime'
import { useTranslation } from 'react-i18next'

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

    const { t } = useTranslation()

    const handleOptionMenuClicked = (e) => {
        setOptionMenuClicked(!optionMenuClicked)
    }

    const wrapperRef = useRef('menu')

    ClickOutside(wrapperRef, () => {
        setOptionMenuClicked(false)
    })

    return (
        <div className="news-article-container">
            <div className="news-agency-text-container">
                {/* na means News Agency */}
                <div className="news-agency-container">
                    <div
                        className="news-agency"
                        title={`Go to ${newsAgency}'s website`}
                    >
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
                    <div ref={wrapperRef}>
                        <EllipseMenu active={optionMenuClicked} />
                    </div>
                    <div
                        className="extra-options"
                        onClick={handleOptionMenuClicked}
                    >
                        {/* TODO: replace this image with an icon */}
                        <FaEllipsisH />
                    </div>
                </div>
                <Link
                    to={routePaths.news.details.replace('{idNumber}', id)}
                    className="news-article-text-link"
                >
                    <div className="news-article-title">{title}</div>
                </Link>
                <p className="news-date" title={new Date(date)}>
                    {date && convertToRelativeTime(new Date(date))}
                </p>

                <div className="news-article-tags">
                    <span>
                        {tags && <img src={tagIconImg} alt="Icon of tags" />}
                    </span>
                    {tags ? <p className="news-article-tag">{tags}</p> : null}
                </div>
                <Link
                    to={routePaths.news.details.replace(
                        '{idNumber}',
                        encodeURIComponent(String(id))
                    )}
                    className="see-all-tag-link"
                >
                    <div className="see-all-tag-container">
                        <p className="see-all-tag">{t('seeAllOption')}</p>
                    </div>
                </Link>
            </div>
            <Link
                to={routePaths.news.details.replace(
                    '{idNumber}',
                    encodeURIComponent(String(id))
                )}
                className="news-article-image-link"
            >
                <figure className="news-image-container">
                    <img
                        src={image}
                        alt="particular news"
                        className="news-article-image"
                    />
                </figure>
            </Link>
        </div>
    )
}

export default NewsArticle
