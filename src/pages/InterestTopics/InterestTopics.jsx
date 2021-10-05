import { useHistory } from 'react-router'

import { useDispatch } from 'react-redux'

import { firstTimePressed } from '../../store/firstTime'

import GridImage from './GridImage'
import Button from '../../components/Layout/Button/Button'

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

    const dispatch = useDispatch()

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
        'Art',
        'Business',
        'Education',
        'Entertainment',
        'Fashion',
        'Health',
        'Politics',
        'Real Estate',
        'Science',
        'Sports',
        'Technology',
        'Travel',
    ]

    const handleButtonClick = (e) => {
        e.preventDefault()
        dispatch(firstTimePressed())
        history.push('/')
    }

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
            <Button
                description="पेस गर्नुहोस्"
                handleButtonClick={handleButtonClick}
            />
        </div>
    )
}

export default InterestTopics
