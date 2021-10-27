import Title from 'components/Layout/Titles/Title'
import Horoscope from 'pages/Horoscope'
import FeaturedNews from 'pages/News/FeaturedNews/FeaturedNews'

import './dashboard.scss'

import { advertisementOneImg, advertisementTwoImg } from 'assets/index'

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
                <section>
                    <div className="main-news-container">
                        <Title
                            title="मुख्य समाचार"
                            urlLink="/"
                            classTitle="main-news"
                        />
                    </div>
                    <section className="main-news-left-side">
                        <article className="featured-news-section">
                            <div className="featured-news-container">
                                <FeaturedNews></FeaturedNews>
                            </div>
                        </article>
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
                            urlLink="/"
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
