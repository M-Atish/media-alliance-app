import { useHistory } from 'react-router'

import Button from 'components/Layout/Button/Button'
import {
    interestTopicsHeadings,
    interestTopicsImages,
} from 'global/constants/dummyData'
import useStore from 'store/store'

import GridImage from './GridImage'
import './interestedTopics.scss'
const InterestTopics = () => {
    const history = useHistory()

    const toggleFirstTime = useStore((store) => store.toggleFirstTime)

    const handleButtonClick = (e) => {
        e.preventDefault()
        toggleFirstTime()
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
                {interestTopicsImages.map((image, index) => (
                    <GridImage
                        image={image}
                        title={interestTopicsHeadings[index]}
                    />
                ))}
            </div>
            <Button
                description="पेस गर्नुहोस्"
                handleButtonClick={handleButtonClick}
                bgColor="grey"
                size="large"
            />
        </div>
    )
}

export default InterestTopics
