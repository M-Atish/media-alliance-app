import { videoTriangleInnerCircleImg } from 'assets'

import classNames from 'classnames'

import './videoPlayButton.scss'

const VideoPlayButton = ({ size }) => {
    return (
        <div className="video-play-button">
            <img
                src={videoTriangleInnerCircleImg}
                alt="Video playback triangle"
                className={classNames('inner-circle-triangle', {
                    small: size === 'small',
                    medium: size === 'medium',
                    large: size === 'large',
                })}
            />
        </div>
    )
}

export default VideoPlayButton
