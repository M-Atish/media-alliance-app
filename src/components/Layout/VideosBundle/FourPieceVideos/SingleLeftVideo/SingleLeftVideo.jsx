import VideoPlayButton from 'components/VideoPlayButton/VideoPlayButton'
import './singleLeftVideo.scss'
import { annapurnaMediaNetworkImg } from 'assets'

import convertToRelativeTime from 'utils/convertToRelativeTime'

const SingleLeftVideo = ({ urlLink, image, title, date }) => {
    return (
        <div className="single-video-container">
            <a
                href={urlLink}
                target="_blank"
                rel="noreferrer"
                className="single-video-link"
            >
                <figure className="single-video-image-container">
                    <img
                        src={image ? image : null}
                        alt="Target video figure"
                        className="single-video-thumbnail"
                    />
                    <VideoPlayButton size="medium" />
                </figure>
            </a>

            <div className="single-video-bottom-container">
                <p className="single-video-title">{title}</p>
                <a
                    href="https://annapurnapost.com/about"
                    className="single-video-news-agency-link"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="single-video-news-agency-date-container">
                        <img
                            src={annapurnaMediaNetworkImg}
                            className="single-video-news-agency-icon"
                            alt=""
                        />
                        <span className="single-video-news-agency-name-span">
                            <p className="single-video-news-agency-name">
                                अन्नपूर्ण पोस्ट
                            </p>
                        </span>
                        <div className="single-video-small-circle"></div>
                        <p className="single-video-date" title={date}>
                            {convertToRelativeTime(date)}
                        </p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default SingleLeftVideo
