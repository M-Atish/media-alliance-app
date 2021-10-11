import Button from '../Button/Button'

import './commentSection.scss'

import { COLORS } from '../../../assets/designTokens/colors'

import { likeIconLightImg } from '../../../assets'
import classNames from 'classnames'

import { useState } from 'react'

const CommentSection = ({ commentData }) => {
    const [likeButtonClicked, setLikeButtonClicked] = useState(false)
    const [dislikeButtonClicked, setDislikeButtonClicked] = useState(false)

    return (
        <section className="comment-section">
            <div className="person-credentials">
                <img
                    src={commentData.img}
                    alt="Person face"
                    className="profile-image"
                />
                <div className="person-name">{commentData.userName}</div>
            </div>
            <div className="comment-reply-reaction">
                <div className="comment-content">
                    {commentData.commentContent}
                </div>
                <div className="reply-reaction-container">
                    <div className="reply-button">
                        <Button
                            bgColor={COLORS.redTheme}
                            description="Reply"
                            height="32px"
                            width="88.55px"
                            margin="0"
                        />
                    </div>
                    <div
                        className={classNames('like-container', {
                            active: likeButtonClicked,
                        })}
                    >
                        <div className="like-button">
                            <img
                                src={likeIconLightImg}
                                alt="Da bong"
                                className="like-icon"
                            />
                        </div>
                        <p>Like</p>
                    </div>
                    <div
                        className={classNames('dislike-container', {
                            active: dislikeButtonClicked,
                        })}
                    >
                        <div className="dislike-button">
                            <img
                                src={likeIconLightImg}
                                alt="Da bong -180 degrees"
                                className="dislike-icon"
                            />
                        </div>
                        <p>Dislike</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommentSection
