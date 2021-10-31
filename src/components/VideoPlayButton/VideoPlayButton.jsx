import { videoTriangleInnerCircleImg } from 'assets'

import './videoPlayButton.scss'

const VideoPlayButton = () => {
    return (
        <div className="outer-white-circle">
            <img
                src={videoTriangleInnerCircleImg}
                alt="Video playback triangle"
                className="inner-circle-triangle"
            />
        </div>
    )
}

export default VideoPlayButton
