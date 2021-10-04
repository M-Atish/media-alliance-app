import { useDispatch } from 'react-redux'

import { firstTimePressed } from '../../store/firstTime'

import './topicsButton.scss'

const TopicsButton = ({ description }) => {
    const dispatch = useDispatch()

    const handleTopicButtonClick = (e) => {
        e.preventDefault()
        dispatch(firstTimePressed())
    }

    return (
        <div className="topics-button-container">
            <button
                type="button"
                className="topic-button-submit"
                onClick={handleTopicButtonClick}
            >
                <p className="topic-button-description">{description}</p>
            </button>
        </div>
    )
}

export default TopicsButton
