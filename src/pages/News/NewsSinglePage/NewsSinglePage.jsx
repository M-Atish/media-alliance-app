import './newsSinglePage.scss'

import Button from 'components/Layout/Button/Button'
import CommentSection from 'components/Layout/CommentSection/CommentSection'

import { chinaTalibanImg, tagIconImg, annapurnaMediaNetworkImg } from 'assets'

import { useState } from 'react'
import { commentData } from 'global/constants/dummyData'

import Spinner from 'components/Spinner/Spinner'
import { useParamsQuery } from 'utils/helpers/URLLocation'
import { useFetchNewsViaId } from 'hooks/news/useFetchNewsById'

const NewsSinglePage = () => {
    const [commentText, setCommentText] = useState('')

    const searchQuery = useParamsQuery()

    const newsArticleId = searchQuery.get('id')

    const { status, data: newsArticleData } = useFetchNewsViaId(newsArticleId)

    console.log(newsArticleData)

    // Change this url to the target website in question for that specific news source

    const handleInputTextChange = (e) => {
        setCommentText(e.target.value)
        // While submitting the text value, make sure to trim the beginning and trailing whitespaces
    }

    const handleButtonSubmit = (e) => {
        e.preventDefault()
        setCommentText(commentText.trim())

        // Put the http post logic here
    }

    return status === 'loading' ? (
        <div className="spinner">
            <Spinner />
        </div>
    ) : (
        <section className="container">
            <div className="single-news-container">
                <div className="top-container">
                    <div className="title-container">
                        <h2 className="title-heading">
                            {newsArticleData?.payload?.title
                                ? newsArticleData.payload.title
                                : null}
                        </h2>
                    </div>
                    <div className="image-tag-container">
                        {newsArticleData?.payload?.img ? (
                            <div className="picture-container">
                                <img
                                    src={chinaTalibanImg}
                                    alt="Two leaders standing like ducks"
                                    className="news-picture"
                                />
                            </div>
                        ) : null}
                        {/* na stands for News Agencies */}
                        <div className="tag-na-date-container">
                            {/* Needs working here. The API does not give news agency details, nor does it give the news agency image. For now, I have left it to dummy data generated in the dummyData json file*/}
                            <div className="na-date">
                                <div className="news-agency">
                                    <img
                                        src={annapurnaMediaNetworkImg}
                                        alt="Annapurna times logo"
                                        className="na-logo"
                                    />
                                    <span>अन्नपूर्ण पोस्ट </span>
                                </div>
                                <div className="date">१४ घण्टा अगाडी</div>
                            </div>
                            <div className="tags-container">
                                <span>
                                    <img src={tagIconImg} alt="Icon of tags" />
                                </span>
                                {newsArticleData?.payload?.tags
                                    ? newsArticleData?.payload?.tags.map(
                                          (tag, index) => (
                                              <p
                                                  className="news-article-tag"
                                                  key={index}
                                              >
                                                  {tag}
                                              </p>
                                          )
                                      )
                                    : null}
                            </div>
                        </div>
                    </div>
                    <div className="content-container">
                        {newsArticleData?.payload?.description &&
                        typeof newsArticleData.payload.description === 'string'
                            ? newsArticleData.payload.description + '....'
                            : 'No description'}
                    </div>
                </div>
                {/* Link this button to the target website */}
                <a
                    href={
                        newsArticleData?.payload?.link
                            ? newsArticleData.payload.link
                            : '#'
                    }
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button
                        description="पूरा समाचार पढनुहोस"
                        size="large"
                        bgColor="grey"
                    />
                </a>
                <div className="body-container">
                    <form action=""></form>
                    <div className="comment-box-container">
                        <p className="comment-heading">
                            यसमा तपाईंको प्रतिक्रिया के छ?
                        </p>
                        <p className="comment-sub-heading">प्रतिक्रिया - १ </p>
                        <form action="" className="comment-form">
                            <textarea
                                className="comment-input"
                                onChange={handleInputTextChange}
                                value={commentText}
                            ></textarea>
                            <Button
                                description="कमेन्ट गर्नुहोस्"
                                handleButtonClick={handleButtonSubmit}
                                bgColor="grey"
                                size="large"
                            />
                        </form>
                    </div>
                </div>
                {commentData.map((comment, index) => (
                    <CommentSection commentData={comment} key={index} />
                ))}
            </div>
        </section>
    )
}

export default NewsSinglePage
