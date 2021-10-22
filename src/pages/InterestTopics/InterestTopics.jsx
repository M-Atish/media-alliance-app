import { useHistory } from 'react-router'

import Button from 'components/Layout/Button/Button'
import {
    interestTopicsHeadings,
    interestTopicsImages,
} from 'global/constants/dummyData'
import useStore from 'store/store'

import GridImage from './GridImage'
import './interestedTopics.scss'
import { useTranslation } from 'react-i18next'
const InterestTopics = () => {
    const history = useHistory()

    const toggleFirstTime = useStore((store) => store.toggleFirstTime)

    const handleButtonClick = (e) => {
        e.preventDefault()
        toggleFirstTime()
        history.push('/')
    }

    const { t } = useTranslation()

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
                description={t('buttons.submitButton')}
                handleButtonClick={handleButtonClick}
                bgColor="grey"
                size="large"
            />
        </div>
    )
}

export default InterestTopics
