import { useEffect } from 'react'
import { NavLink, useHistory, useLocation } from 'react-router-dom'

import { adOneImg } from '../../assets'
import { annapurnaTimesImg } from '../../assets'

import VideoCarousel from '../../utils/carousel/VideoCarousel'

import { useParamsQuery } from '../../utils/helpers/URLLocation'

import MostRead from './MostRead'
import './news.scss'
import NewsArticle from './NewsArticle'

const News = () => {
    const searchQuery = useParamsQuery()

    let location = useLocation()
    const history = useHistory()

    useEffect(() => {
        if (location.pathname === '/news') {
            history.push('?modules=all&sub-category=all')
        }
        // if (searchQuery.get('module') === null) {
        //     history.push(
        //         `?modules=all&sub-category=${searchQuery.get('sub-category')}`
        //     )
        // }

        // eslint-disable-next-line
    }, [])

    const topicFilter = [
        { path: 'all', label: 'सबै' },
        { path: 'nepal', label: 'नेपालको राजनीति' },
        {
            path: 'world',
            label: 'विश्व राजनीति',
        },
        {
            path: 'asia',
            label: 'एशिया',
        },
    ]

    const topics = [
        {
            path: 'sports',
            label: 'खेलकुद',
        },
        {
            path: 'politics',
            label: 'राजनीति',
        },
        {
            path: 'technology',
            label: 'प्रविधि',
        },
        {
            path: 'business',
            label: 'व्यापार',
        },
        {
            path: 'health',
            label: 'स्वास्थ्य',
        },
        {
            path: 'education',
            label: 'शिक्षा',
        },
        {
            path: 'travel',
            label: 'यात्रा',
        },
        {
            path: 'lifestyle',
            label: 'जीवनशैली',
        },
        {
            path: 'entertainment',
            label: 'मनोरञ्जन',
        },
        {
            path: 'art',
            label: 'कला',
        },
    ]

    const sampleNews = [
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
        {
            newsAgency: 'अन्नपूर्ण पोस्ट',
            newsAgencyIcon: annapurnaTimesImg,
            title: 'चीनले तालिबानमाथि लगाएको प्रतिबन्ध हटाउन माग गरेको छ',
            content: 'Some random shit',
            tags: ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल'],
            date: '१४ घण्टा अगाडी',
            image: adOneImg,
        },
    ]

    console.log(`${searchQuery.get('module')}`, 'module')

    return (
        <div className="container">
            <section className="news-topic-container">
                <div className="news-topic-selector">
                    {topics.map((topic, index) => (
                        <NavLink
                            to={`/news?module=${topic.path}&sub-category=all`}
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
                    {topicFilter.map((topic, index) => (
                        <NavLink
                            to={`/news?module=${searchQuery.get(
                                'modules'
                            )}&sub-category=${topic.path}`}
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
                    {sampleNews.map((article) => (
                        <div className="video-item">
                            <img
                                src={annapurnaTimesImg}
                                alt=""
                                className="carousel-thumbnail"
                            />
                            <h4 className="video-title">
                                मिडिया गठबन्धन नेपाल
                            </h4>
                            <p className="video-channel-description">
                                <span>
                                    <img
                                        src={annapurnaTimesImg}
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
