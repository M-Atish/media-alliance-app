import './commentSection.scss'

const CommentSection = ({ commentData }) => {
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
            </div>
        </section>
    )
}

export default CommentSection
