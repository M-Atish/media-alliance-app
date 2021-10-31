import Title from 'components/Layout/Titles/Title'
// import Horoscope from 'pages/Horoscope'
import FeaturedNews from 'pages/News/FeaturedNews/FeaturedNews'
import NewsArticleBundle from 'pages/News/NewsArticleBundle/NewsArticleBundle'

import './dashboard.scss'

import {
    advertisementFourImg,
    advertisementOneImg,
    advertisementThreeImg,
    advertisementTwoImg,
} from 'assets/index'
import HotNewsTab from 'pages/HotNewsTab/HotNewsTab'
import LeaderboardAdvertisement from 'components/Layout/Advertisement/LeaderboardAdvertisement/LeaderboardAdvertisement'
import MediumRectanglesAdvertisement from 'components/Layout/Advertisement/MediumRectanglesAdvertisement/MediumRectanglesAdvertisement'
import Widget from 'components/Layout/Widgets/Widget'
// import useFetchWeather from 'hooks/weather/useFetchWeather'

// const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY || ''
const Dashboard = () => {
    const advertisementLeaderboardImages = [
        advertisementOneImg,
        advertisementTwoImg,
    ]

    const advertisementMediumRectangleImages = [
        advertisementThreeImg,
        advertisementFourImg,
    ]

    return (
        <>
            <section className="advertisement-section-one">
                <div className="advertisement-container-one">
                    <LeaderboardAdvertisement
                        payload={advertisementLeaderboardImages}
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
                            <article className="advertisement-section-two">
                                <MediumRectanglesAdvertisement
                                    payload={advertisementMediumRectangleImages}
                                />
                            </article>
                        </section>
                    </section>
                </section>
                <section className="short-widget-number-one">
                    <div className="short-widget-number-one-container">
                        <article className="share-market-widget">
                            <Widget
                                widgetTitle="शेयर बजार"
                                checkBoxSlider={true}
                            />
                        </article>
                        <article className="forex-widget">
                            <Widget widgetTitle="विदेशी मुद्रा" />
                        </article>
                        <article className="weather-widget">
                            {/* <Widget widgetTitle="" /> */}
                            {/* Needs working here */}
                            {/* Put the weather section here */}
                        </article>
                    </div>
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
