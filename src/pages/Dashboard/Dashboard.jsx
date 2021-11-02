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

// REMINDER: Remove this section once the widget api comes in
import { widgetData } from 'global/constants/dummyData'
import VideosBundle from 'components/Layout/VideosBundle/VideosBundle'
import DashboardHoroscope from 'components/Layout/DashboardHoroscope/DashboardHoroscope'
import Footer from 'components/Layout/Footer/Footer'

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
            <main className="container">
                <section className="advertisement-section-one">
                    <div className="advertisement-container-one">
                        <LeaderboardAdvertisement
                            payload={advertisementLeaderboardImages}
                        />
                    </div>
                </section>
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
                                <NewsArticleBundle />
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
                                widgetTitleDesc={`${new Date().toLocaleDateString(
                                    [],
                                    {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    }
                                )} | ${new Date().toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}`}
                                widgetPayload={widgetData[0]}
                                checkBoxSlider={true}
                                urlLink="/share-market"
                            />
                        </article>
                        <article className="forex-widget">
                            <Widget
                                widgetTitle="विदेशी मुद्रा"
                                widgetTitleDesc={`${new Date().toLocaleDateString(
                                    [],
                                    {
                                        year: 'numeric',
                                        month: 'short',
                                        day: 'numeric',
                                    }
                                )} | ${new Date().toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}`}
                                widgetPayload={widgetData[1]}
                                urlLink="/forex"
                            />
                        </article>
                        {/* <article className="weather-widget">
                            <Widget widgetTitle="" /> 
                            Put the weather section here 
                        </article> */}
                    </div>
                </section>
                <section className="video-playlist-section">
                    <div className="video-playlist-container">
                        <Title
                            title="भिडियो संग्रह"
                            urlLink="/"
                            classTitle="video-playlist"
                        />
                        <VideosBundle />
                    </div>
                </section>
                <section className="horoscopes-section">
                    <div className="horoscopes-container">
                        <Title
                            title="राशिफल"
                            urlLink="/horoscopes"
                            classTitle="horoscopes"
                        />
                        <DashboardHoroscope />
                    </div>
                </section>
                <section className="advertisement-section-three">
                    <div className="advertisement-container-three">
                        <LeaderboardAdvertisement
                            payload={advertisementLeaderboardImages}
                        />
                    </div>
                </section>
            </main>
            <footer className="footer-section">
                <Footer />
            </footer>
        </>
    )
}

export default Dashboard
