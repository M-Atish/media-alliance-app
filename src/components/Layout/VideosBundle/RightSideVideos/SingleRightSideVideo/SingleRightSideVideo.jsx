import { useState, useRef } from 'react'

import VideoPlayButton from 'components/VideoPlayButton/VideoPlayButton'

import convertToRelativeTime from 'utils/convertToRelativeTime'
import { ClickOutside } from 'utils/helpers/clickOutside/ClickOutside'

import { AiFillTags } from 'react-icons/ai'
import { FaEllipsisH } from 'react-icons/fa'

import './singleRightSideVideo.scss'

// Remove this section once the API comes in
import { annapurnaMediaNetworkImg } from 'assets'
import EllipseMenu from 'components/Layout/EllipseMenu/EllipseMenuContainer/EllipseMenu'

const SingleRightSideVideo = ({
    urlLink,
    image,
    title,
    tags,
    // newsAgencyImage,
    // newsAgencyName,
    date,
}) => {
    const [optionMenuClicked, setOptionMenuClicked] = useState(false)

    const handleOptionMenuClicked = (e) => {
        setOptionMenuClicked(!optionMenuClicked)
    }

    const wrapperRef = useRef('menu')

    ClickOutside(wrapperRef, () => {
        setOptionMenuClicked(false)
    })

    return (
        <div className="single-right-video-container">
            <a
                href={urlLink}
                target="_blank"
                rel="noreferrer"
                className="single-right-video-image-link"
            >
                <figure className="single-right-video-image-container">
                    <img
                        src={image ? image : null}
                        alt="Target video figure"
                        className="single-right-video-thumbnail"
                    />
                    <VideoPlayButton size="small" />
                </figure>
            </a>
            <div className="single-right-video-right-container">
                <div className="single-right-video-news-agency-date-ellipse-container">
                    <div className="single-right-video-news-agency-date-container">
                        <img
                            src={annapurnaMediaNetworkImg}
                            className="single-right-video-news-agency-icon"
                            alt=""
                        />
                        <p className="single-right-video-news-agency-name">
                            अन्नपूर्ण पोस्ट .
                        </p>
                        <p
                            className="single-right-video-date"
                            title={new Date(date)}
                        >
                            {convertToRelativeTime(new Date(date))}
                        </p>
                    </div>
                    <div ref={wrapperRef}>
                        <EllipseMenu active={optionMenuClicked} />
                    </div>
                    <div
                        className="single-right-video-ellipse"
                        onClick={handleOptionMenuClicked}
                    >
                        <FaEllipsisH />
                    </div>
                </div>
                <p className="single-right-video-title">{title}</p>
                <div className="single-right-video-tags-container">
                    <AiFillTags />
                    <span className="single-right-video-tag-list">
                        {/* REMINDER: Replace this section with the tags when the API comes in. */}
                        {tags.map((tag, index) => (
                            <p className="single-right-video-tag" key={index}>
                                {tag}
                            </p>
                        ))}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SingleRightSideVideo
