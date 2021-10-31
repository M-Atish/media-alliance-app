import VideoPlayButton from 'components/VideoPlayButton/VideoPlayButton'

const FeaturedVideo = ({ payload }) => {
    console.log(payload?.image?.imageUrl ? payload.image.imageUrl : null)
    return (
        <div className="featured-video-container">
            <a
                href={payload.url}
                target="_blank"
                rel="noreferrer"
                className="video-link"
            >
                <figure>
                    <img
                        src={
                            payload?.image?.imageUrl
                                ? payload.image.imageUrl
                                : null
                        }
                        alt="Target video figure"
                    />
                    <VideoPlayButton className="video-play-button" />
                </figure>
            </a>
        </div>
    )
}

export default FeaturedVideo
