import Title from 'components/Layout/Titles/Title'
import Horoscope from 'pages/Horoscope'
import FeaturedNews from 'pages/News/FeaturedNews/FeaturedNews'

import './dashboard.scss'

const Dashboard = () => {
    return (
        <main className="container">
            <section className="main-news-container">
                <Title
                    title="मुख्य समाचार"
                    urlLink="/"
                    classTitle="main-news"
                />
                <section className="main-news-left-side">
                    <article className="featured-news-container">
                        <FeaturedNews>
                            
                        </FeaturedNews>
                    </article>
                </section>
            </section>
            <section className="video-section-container">
                <Title
                    title="भिडियो संग्रह"
                    urlLink="/"
                    classTitle="video-section"
                />
            </section>
            <section className="horoscopes-container">
                <Title title="राशिफल" urlLink="/" classTitle="horoscopes" />
                <Horoscope />
            </section>
            <section className="quick-navigation-container">
                <Title
                    title="छिटो पहुँच"
                    urlLink="/"
                    classTitle="quick-navigation"
                />
            </section>
        </main>
    )
}

export default Dashboard
