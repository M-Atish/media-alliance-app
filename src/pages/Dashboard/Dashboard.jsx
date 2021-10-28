import Title from 'components/Layout/Titles/Title'
// import Horoscope from 'pages/Horoscope'
import FeaturedNews from 'pages/News/FeaturedNews/FeaturedNews'
import NewsArticleBundle from 'pages/News/NewsArticleBundle/NewsArticleBundle'

import './dashboard.scss'

import { advertisementOneImg, advertisementTwoImg } from 'assets/index'
import HotNewsTab from './../HotNewsTab/HotNewsTab'

const Dashboard = () => {
    return (
        <>
            <section className="advertisement-section">
                <div className="advertisement-container">
                    <img
                        src={advertisementOneImg}
                        alt="advertisement of Coke"
                        className="advertisement-img-one"
                    />
                    <img
                        src={advertisementTwoImg}
                        alt="advertisement of Coke Two"
                        className="advertisement-img-two"
                    />
                </div>
            </section>
            <main className="container">
                <section className="main-news-section">
                    <div className="main-news-container">
                        <Title
                            title="मुख्य समाचार"
                            urlLink="/news"
                            classTitle="main-news"
                        />
                    </div>
                    <section className="main-news-dashboard">
                        <section className="main-news-left-side">
                            <article className="featured-news-section">
                                <div className="featured-news-container">
                                    <FeaturedNews />
                                </div>
                            </article>
                            <article className="single-news-block-section">
                                <div className="single-news-block-container">
                                    <NewsArticleBundle />
                                </div>
                            </article>
                        </section>
                        <section className="main-news-right-side">
                            <article className="fresh-popular-trending-news-section">
                                <div className="fresh-popular-trending-news-container">
                                    <HotNewsTab />
                                </div>
                            </article>
                        </section>
                    </section>
                </section>
                <section className="video-playlist-section">
                    <div className="video-playlist-container">
                        <Title
                            title="भिडियो संग्रह"
                            urlLink="/"
                            classTitle="video-playlist"
                        />
                    </div>
                </section>
                <section className="horoscopes-section">
                    <div className="horoscopes-container">
                        <Title
                            title="राशिफल"
                            urlLink="/horoscopes"
                            classTitle="horoscopes"
                        />
                        {/* <Horoscope /> */}
                    </div>
                </section>
                <section className="quick-navigation-section">
                    <div className="quick-navigation-container">
                        <Title
                            title="छिटो पहुँच"
                            urlLink="/"
                            classTitle="quick-navigation"
                        />
                    </div>
                </section>
            </main>
        </>
    )
}

export default Dashboard
