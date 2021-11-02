import './singleTabContent.scss'

// REMINDER: Remove this section once the API comes in.
import { personImg, annapurnaMediaNetworkImg } from 'assets'

const SingleTabContent = () => {
    const title =
        'अहिलेकै प्रतिनिधिसभाबाट एमसीसी पास हुन्छ : प्रम hello how are you doing hwo do you do noice noic enoice'
    const newsAgencyName = 'अन्नपूर्ण पोस्ट'
    return (
        <a
            href="https://www.figma.com/file/TDRrRIM06UoLyr4lprvphv/Media-Alliance-Web-UI?node-id=70%3A2094"
            target="_blank"
            rel="noreferrer"
            className="single-tab-content-link"
        >
            <div className="single-tab-content-container">
                <div className="single-tab-content-left-side">
                    <p className="single-tab-content-title">{title}</p>
                    <div className="single-tab-content-news-agency-date-container">
                        <div className="single-tab-content-news-agency">
                            <img
                                src={annapurnaMediaNetworkImg}
                                alt="News Channel"
                                className="single-tab-content-news-agency-img"
                            />
                            <span className="single-tab-content-news-agency-name">
                                {newsAgencyName}
                            </span>
                            .
                        </div>
                        {/* REMINDER: Remove the static 14 horus ago section with dynamic date when the API comes in */}
                        <div className="single-tab-content-date">
                            १४ घण्टा अगाडी{' '}
                        </div>
                    </div>
                </div>
                <figure className="single-tab-content-right-side">
                    <img
                        src={personImg}
                        alt="Person"
                        className="single-tab-content-right-side-img"
                    />
                </figure>
            </div>
        </a>
    )
}

export default SingleTabContent
