import Button from '../Button/Button'

import './commentSection.scss'

import { likeIconLightImg } from 'assets'
import classNames from 'classnames'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CommentSection = ({ commentData }) => {
    const [likeButtonClicked, setLikeButtonClicked] = useState(false)
    const [dislikeButtonClicked, setDislikeButtonClicked] = useState(false)

    const handleLikeButtonClicked = (e) => {
        if (dislikeButtonClicked === true) {
            setDislikeButtonClicked(false)
        }
        setLikeButtonClicked(!likeButtonClicked)
    }

    const handleDislikeButtonClicked = (e) => {
        if (likeButtonClicked === true) {
            setLikeButtonClicked(false)
        }
        setDislikeButtonClicked(!dislikeButtonClicked)
    }
    const { t } = useTranslation()

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
                            bgColor="red"
                            description={t('buttons.newsSingleArticleReply')}
                            size="small"
                        />
                    </div>
                    <div
                        className={classNames('like-container', {
                            active: likeButtonClicked,
                        })}
                        onClick={handleLikeButtonClicked}
                    >
                        <div
                            className={classNames('like-button', {
                                active: likeButtonClicked,
                            })}
                        >
                            <img
                                src={likeIconLightImg}
                                alt="Da bong"
                                className="like-icon"
                            />
                        </div>
                        <p>{t('buttons.newsSingleArticleLike')}</p>
                    </div>
                    <div
                        className={classNames('dislike-container', {
                            active: dislikeButtonClicked,
                        })}
                        onClick={handleDislikeButtonClicked}
                    >
                        <div
                            className={classNames('dislike-button', {
                                active: dislikeButtonClicked,
                            })}
                        >
                            <img
                                src={likeIconLightImg}
                                alt="Da bong -180 degrees"
                                className="dislike-icon"
                            />
                        </div>
                        <p>{t('buttons.newsSingleArticleDislike')}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommentSection
