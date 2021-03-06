import { useEffect } from 'react'
import { NavLink, useLocation, useHistory } from 'react-router-dom'

import Carousel from 'utils/carousel/Carousel'
import { useParamsQuery } from 'utils/helpers/URLLocation'
import { routePaths } from 'global/constants/routePaths'
import {
    newsTopicFilter,
    newsTopics,
    sampleNews,
} from 'global/constants/dummyData'

import MostRead from './MostRead/MostRead'
import './news.scss'
import Spinner from 'components/Spinner/Spinner'
import { useFetchVideos } from 'hooks/videos/useFetchVideos'
import NewsArticleBundle from './NewsArticleBundle/NewsArticleBundle'

const News = () => {
    const searchQuery = useParamsQuery()
    const location = useLocation()
    const history = useHistory()

    const { status: statusVideos, data: videosData } = useFetchVideos()

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
                <h2 className="news-articles-heading">???????????? ??????????????????</h2>
                <div className="news-articles">
                    <NewsArticleBundle />
                </div>
            </section>
            <section className="video-container">
                <h2 className="news-videos-heading">
                    ???????????????????????? ???????????? ????????????????????? ??????????????????
                </h2>
                {statusVideos === 'loading' ? (
                    <Spinner />
                ) : (
                    <Carousel>
                        {videosData?.payload
                            ? videosData.payload.map((article) => (
                                  <div className="video-item" key={article.id}>
                                      <a
                                          href={
                                              article?.url ? article.url : null
                                          }
                                          target="_blank"
                                          className="video-link"
                                          rel="noreferrer"
                                      >
                                          <img
                                              src={
                                                  article?.image?.imageUrl
                                                      ? article.image.imageUrl
                                                      : null
                                              }
                                              alt={
                                                  article?.title
                                                      ? article.title
                                                      : null
                                              }
                                              className="carousel-thumbnail"
                                          />
                                          <h4 className="video-title">
                                              {article?.title
                                                  ? article.title
                                                  : 'There should have been a title here.'}
                                          </h4>
                                          <p className="video-channel-description">
                                              {/* Needs working here. The API does not supply news agency details, images, and description as of yet. Implement this part when the backend supplies the news agency details */}
                                              <span>
                                                  {/* <img
                                              src={article.image}
                                              className="video-channel-icon"
                                              alt=""
                                          /> */}
                                              </span>
                                              Mountain TV
                                          </p>
                                      </a>
                                  </div>
                              ))
                            : null}
                    </Carousel>
                )}
            </section>
            <section className="most-read-container">
                <h2 className="most-read-heading">???????????? ??????????????????</h2>
                <div className="most-read-items">
                    {sampleNews.map(
                        (article, index) =>
                            index <= 5 && (
                                <MostRead
                                    title={article.title}
                                    newsAgency={article.newsAgency}
                                    newsAgencyIcon={article.newsAgencyIcon}
                                    rank={index + 1}
                                    key={index}
                                />
                            )
                    )}
                </div>
            </section>
        </div>
    )
}

export default News
