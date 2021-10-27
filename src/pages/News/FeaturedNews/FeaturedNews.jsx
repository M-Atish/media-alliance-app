import Spinner from 'components/Spinner/Spinner'
import { routePaths } from 'global/constants/routePaths'
import { useFetchNews } from 'hooks/news/useFetchNews'
import Carousel from 'utils/carousel/Carousel'
import convertToRelativeTime from 'utils/convertToRelativeTime'

import { adOneImg } from 'assets'

import './featuredNews.scss'

import { AiFillTags } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const FeaturedNews = (props) => {
    const { status: statusNews, data: newsData } = useFetchNews()

    console.log(newsData?.payload)

    return statusNews === 'success' ? (
        <Carousel itemsNumber={1}>
            {newsData?.payload
                ? newsData.payload.map((data, index) => (
                      <>
                          <div className="featured-news-container" key={index}>
                              <NavLink
                                  to={routePaths.news.details.replace(
                                      '{idNumber}',
                                      encodeURIComponent(String(data.id))
                                  )}
                              >
                                  <figure>
                                      <img
                                          src={data.image}
                                          alt=""
                                          className="featured-news-image"
                                      />
                                  </figure>
                              </NavLink>
                              <div className="featured-news-bottom-container">
                                  <div className="news-agency-date-container">
                                      <a
                                          href={data.postable_type}
                                          target="_blank"
                                          rel="noreferrer"
                                          className="news-agency-redirect-link"
                                      >
                                          <p className="news-agency-details">
                                              <img
                                                  src={
                                                      data?.channel_icon
                                                          ? data.channel_icon
                                                          : null
                                                  }
                                                  alt="news channel icon"
                                                  className="news-agency-icon"
                                              />
                                              <span className="news-agency-name">
                                                  {data.channel_name}
                                              </span>
                                          </p>
                                      </a>
                                      <p
                                          className="news-relative-date"
                                          title={new Date(data.updated_at)}
                                      >
                                          {convertToRelativeTime(
                                              new Date(data.updated_at)
                                          )}
                                      </p>
                                  </div>
                                  <NavLink
                                      to={routePaths.news.details.replace(
                                          '{idNumber}',
                                          encodeURIComponent(String(data.id))
                                      )}
                                      className="news-title-redirect-link"
                                  >
                                      <div className="news-title-container">
                                          <h2 className="news-title">
                                              {data.title}
                                          </h2>
                                      </div>
                                  </NavLink>
                                  <div className="news-tags-container">
                                      <AiFillTags />
                                      {/* TODO: Once the API for the tags is finished, map the contents of the data.tag array and put it here as a div or something */}
                                      <span className="news-tag-list">
                                          {data.tag}
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </>
                  ))
                : 'No video found'}
        </Carousel>
    ) : (
        <Spinner />
    )
}

export default FeaturedNews
