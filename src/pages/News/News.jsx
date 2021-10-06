import { NavLink } from 'react-router-dom'

import { useEffect } from 'react'

import VideoCarousel from '../../utils/carousel/VideoCarousel'

import { useParamsQuery } from '../../utils/helpers/URLLocation'

import MostRead from './MostRead'
import './news.scss'
import NewsArticle from './NewsArticle'

import { useLocation, useHistory } from 'react-router'

// Constants
import { routePaths } from '../../global/constants/routePaths'
import {
    newsTopicFilter,
    newsTopics,
    sampleNews,
} from '../../global/constants/dummyData'

const News = () => {
    const searchQuery = useParamsQuery()

    let location = useLocation()
    let history = useHistory()

    useEffect(() => {
        if (location.pathname === routePaths.news.base) {
            history.push(
                routePaths.news.moduleSubCategory
                    .replace('{moduleName}', 'all')
                    .replace('{subCategoryName}', 'all')
            )
        }
        // eslint-disable-next-line
    }, [])

    return (
        <div className="container">
            <section className="news-topic-container">
                <div className="news-topic-selector">
                    {newsTopics.map((topic, index) => (
                        <NavLink
                            to={routePaths.news.moduleSubCategory
                                .replace('{moduleName}', topic.path)
                                .replace('{subCategoryName}', 'all')}
                            activeClassName={
                                searchQuery.get('module') === topic.path
                                    ? `is-active`
                                    : ''
                            }
                            key={index}
                            className="news-topic-item"
                        >
                            {topic.label}
                        </NavLink>
                    ))}
                </div>
                <div className="news-topic-filter">
                    {newsTopicFilter.map((topic, index) => (
                        <NavLink
                            to={routePaths.news.moduleSubCategory
                                .replace(
                                    '{moduleName}',
                                    searchQuery.get('module') || 'all'
                                )
                                .replace('{subCategoryName}', topic.path)}
                            className="news-topic"
                            activeClassName={
                                searchQuery.get('sub-category') === topic.path
                                    ? 'active-filter'
                                    : ''
                            }
                            key={index}
                        >
                            {topic.label}
                        </NavLink>
                    ))}
                </div>
                <h2 className="news-articles-heading">आजको समाचार</h2>
                <div className="news-articles">
                    {sampleNews.map((article, index) => (
                        <NewsArticle
                            key={index}
                            newsAgency={article.newsAgency}
                            newsAgencyIcon={article.newsAgencyIcon}
                            title={article.title}
                            content={article.content}
                            tags={article.tags}
                            date={article.date}
                            image={article.image}
                        />
                    ))}
                </div>
            </section>
            <section className="video-container">
                <h2 className="news-videos-heading">
                    सबैभन्दा धेरै हेरिएको भिडियो
                </h2>
                <VideoCarousel>
                    {sampleNews.map((article, index) => (
                        <div className="video-item" key={index}>
                            <img
                                src={article.image}
                                alt=""
                                className="carousel-thumbnail"
                            />
                            <h4 className="video-title">
                                मिडिया गठबन्धन नेपाल
                            </h4>
                            <p className="video-channel-description">
                                <span>
                                    <img
                                        src={article.image}
                                        className="video-channel-icon"
                                        alt=""
                                    />
                                </span>
                                Mountain TV
                            </p>
                        </div>
                    ))}
                </VideoCarousel>
            </section>
            <section className="most-read-container">
                <h2 className="most-read-heading">धेरै पढिएको</h2>
                <div className="most-read-items">
                    {sampleNews.map(
                        (article, index) =>
                            index <= 5 && (
                                <MostRead
                                    title={article.title}
                                    newsAgency={article.newsAgency}
                                    newsAgencyIcon={article.newsAgencyIcon}
                                    rank={index + 1}
                                />
                            )
                    )}
                </div>
            </section>
        </div>
    )
}

export default News
