import { nanoid } from '@reduxjs/toolkit'

import { tagIconImg } from '../../assets'

import './newsarticle.scss'

const NewsArticle = ({
    newsAgency,
    newsAgencyIcon,
    title,
    tags,
    date,
    image,
}) => {
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
                <div className="news-article-tags">
                    <span>
                        <img src={tagIconImg} alt="Icon of tags" />
                    </span>
                    {tags.map((tag) => (
                        <p className="news-article-tag" key={nanoid()}>
                            {tag}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewsArticle
