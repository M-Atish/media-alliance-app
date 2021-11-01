import VideoPlayButton from 'components/VideoPlayButton/VideoPlayButton'

import './featuredVideo.scss'

// Remove this section once the API comes in.
import { annapurnaMediaNetworkImg } from 'assets'
import convertToRelativeTime from 'utils/convertToRelativeTime'
import { AiFillTags } from 'react-icons/ai'

const FeaturedVideo = ({ payload }) => {
    console.log(payload)
    return (
        <div className="featured-video-container">
            <a
                href={payload.url}
                target="_blank"
                rel="noreferrer"
                className="video-link"
            >
                <figure className="video-image-container">
                    <img
                        src={
                            payload?.image?.imageUrl
                                ? payload.image.imageUrl
                                : null
                        }
                        className="featured-video-thumbnail"
                        alt="Target video figure"
                    />
                    <VideoPlayButton size="large" />
                </figure>
            </a>
            <div className="featured-video-bottom-container">
                <div className="featured-video-news-agency-date">
                    <a
                        // REMINDER: Replace the href value with the API value once the API comes.
                        href="https://annapurnapost.com/about"
                        className="featured-video-news-agency-container"
                    >
                        <img
                            src={annapurnaMediaNetworkImg}
                            alt="Annapurna news"
                            className="featured-video-news-agency-icon"
                        />
                        <span className="featured-video-news-agency-name-span">
                            <p className="featured-video-news-agency-name">
                                अन्नपूर्ण पोस्ट{' '}
                            </p>
                        </span>
                    </a>

                    <p
                        className="featured-video-date"
                        title={
                            new Date(
                                payload?.updated_at ? payload.updated_at : null
                            )
                        }
                    >
                        {payload.updated_at &&
                            convertToRelativeTime(
                                new Date(
                                    payload?.updated_at
                                        ? payload.updated_at
                                        : null
                                )
                            )}
                    </p>
                </div>
                <p className="featured-video-title">
                    {payload?.title ? payload.title : 'No title'}
                </p>
                <div className="featured-video-tag-container">
                    <AiFillTags />
                    <span className="featured-video-tag-list">
                        {/* REMINDER: Replace this section with the tags when the API comes in. */}
                        {['tag', 'tag', 'tag', 'tag', 'tag', 'tag', 'tag'].map(
                            (tag, index) => (
                                <p className="featured-video-tag" key={index}>
                                    {tag}
                                </p>
                            )
                        )}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FeaturedVideo
