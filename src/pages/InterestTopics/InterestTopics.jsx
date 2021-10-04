import { useHistory } from 'react-router'

import GridImage from './GridImage'
import TopicsButton from './TopicsButton'

import './interestedTopics.scss'

import {
    artImg,
    businessImg,
    educationImg,
    entertainmentImg,
    fashionImg,
    healthImg,
    politicsImg,
    realEstateImg,
    scienceImg,
    sportsImg,
    technologyImg,
    travelImg,
} from '../../assets'

const InterestTopics = () => {
    const history = useHistory()

    function handleTopicButtonClick(e) {
        e.preventDefault()
        history.push('/')
    }

    const images = [
        artImg,
        businessImg,
        educationImg,
        entertainmentImg,
        fashionImg,
        healthImg,
        politicsImg,
        realEstateImg,
        scienceImg,
        sportsImg,
        technologyImg,
        travelImg,
    ]

    const headings = [
        'art',
        'business',
        'education',
        'entertainment',
        'fashion',
        'health',
        'politics',
        'realEstate',
        'science',
        'sports',
        'technology',
        'travel',
    ]

    return (
        <div className="interested-topics-container">
            <div className="topics-header">
                <h1 className="header">मनपर्ने विषय छनौट गर्नुहोस्</h1>
                <span className="header-span">
                    यी विषयहरु बाट समाचार तपाइँको फिड मा देखाइनेछ
                </span>
            </div>
            <div className="grid">
                {images.map((image, index) => (
                    <GridImage image={image} title={headings[index]} />
                ))}
            </div>
            <div onClick={handleTopicButtonClick}>
                <TopicsButton description="पेस गर्नुहोस्" />
            </div>
        </div>
    )
}

export default InterestTopics
