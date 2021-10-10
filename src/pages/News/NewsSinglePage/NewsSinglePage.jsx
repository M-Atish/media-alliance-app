import './newsSinglePage.scss'

import Button from './../../../components/Layout/Button/Button'
import CommentSection from '../../../components/Layout/CommentSection/CommentSection'

import {
    chinaTalibanImg,
    tagIconImg,
    annapurnaMediaNetworkImg,
} from '../../../assets'

import { useState } from 'react'
import { commentData } from '../../../global/constants/dummyData'

const NewsSinglePage = () => {
    const [commentText, setCommentText] = useState('')

    console.log(commentText)

    // Change this url to the target website in question for that specific news source
    const targetWebsite =
        'https://stackoverflow.com/questions/42914666/react-router-external-link'

    const tags = ['के.पी ओलि', 'एमाले', 'राजनीति', 'नेपाल']

    const handleInputTextChange = (e) => {
        setCommentText(e.target.value)
        // While submitting the text value, make sure to trim the beginning and trailing whitespaces
    }

    const handleButtonSubmit = (e) => {
        e.preventDefault()
        setCommentText(commentText.trim())

        // Put the http post logic here
    }

    return (
        <section className="container">
            <div className="single-news-container">
                <div className="top-container">
                    <div className="title-container">
                        <h2 className="title-heading">
                            तालिवानको धार्मिक प्रहरीका पूर्व नाइकेले
                            अफगानिस्तानमा मृत्युदण्ड
                        </h2>
                    </div>
                    <div className="image-tag-container">
                        <div className="picture-container">
                            <img
                                src={chinaTalibanImg}
                                alt="Two leaders standing like ducks"
                                className="news-picture"
                            />
                        </div>
                        {/* na stands for News Agencies */}
                        <div className="tag-na-date-container">
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
                                {tags.map((tag, index) => (
                                    <p className="news-article-tag" key={index}>
                                        {tag}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="content-container">
                        तालिवानको धार्मिक प्रहरीका पूर्व नाइकेले अफगानिस्तानमा
                        मृत्युदण्ड र अंगभंग नै गर्नेजस्ता कडा सजाय पुनः
                        कार्यान्वयनमा ल्याइने बताएका छन् । अहिले सम्पूर्ण
                        कारागारका प्रमुख मुल्लाह नुरद्धिन तुरावीले एसोसि...
                    </div>
                </div>
                {/* Link this button to the target website */}
                <a href={targetWebsite} target="_blank" rel="noreferrer">
                    <Button description="पूरा समाचार पढनुहोस" />
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
