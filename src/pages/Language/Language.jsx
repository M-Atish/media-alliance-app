import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { USDImg, NEPImg } from '../../assets'

import './language.scss'

import LanguageButton from './LanguageButton'

const Language = () => {
    const [nepaliButtonActive, setNepaliButtonActive] = useState(false)
    const [usButtonActive, setUsButtonActive] = useState(false)

    const history = useHistory()

    function handleNepaliClick() {
        if (usButtonActive) {
            setUsButtonActive(false)
        }
        setNepaliButtonActive(!nepaliButtonActive)
        history.push('/interested-topics')
    }

    function handleUsClick() {
        if (nepaliButtonActive) {
            setNepaliButtonActive(false)
        }
        setUsButtonActive(!usButtonActive)
        history.push('/interested-topics')
    }

    return (
        <div className="language-container">
            <div className="language-header">
                <h1 className="header">भाषा छान्नुहोस्</h1>
                <span className="header-span">
                    सुरु गर्न को लागी भाषा छान्नुहोस्
                </span>
            </div>
            <div className="language-center-buttons">
                {/* The reason that we use div containers to encapsulate the react components is to handle DOM events. React components return a bunch of DOM elements thus, DOM events do not work with them. */}
                <div onClick={handleNepaliClick}>
                    <LanguageButton
                        icon={NEPImg}
                        description="नेपाली"
                        activeState={nepaliButtonActive}
                    />
                </div>
                <div onClick={handleUsClick}>
                    <LanguageButton
                        icon={USDImg}
                        description="English"
                        activeState={usButtonActive}
                    />
                </div>
            </div>
        </div>
    )
}

export default Language
