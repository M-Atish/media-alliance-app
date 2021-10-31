import './widget.scss'

import SwitchCheckBox from './SwitchCheckBox/SwitchCheckBox'

import { useState } from 'react'

const Widget = ({ widgetTitle, widgetTitleDesc, urlLink, checkBoxSlider }) => {
    // Please remember that false corresponds to the gain section in the share market widget and true correspods to the loss section in the share market widget
    const [isChecked, setIsChecked] = useState(false)

    return (
        <div className="widget-container">
            <div className="widget-top-container">
                <div className="widget-top-left">
                    <p className="widget-title">{widgetTitle}</p>
                    <span className="widget-desc">{widgetTitleDesc}</span>
                </div>
                <div className="widget-top-right">
                    {checkBoxSlider && (
                        <SwitchCheckBox
                            isOn={isChecked}
                            handleToggle={() => setIsChecked(!isChecked)}
                        />
                    )}
                    <div className="more-button"></div>
                </div>
            </div>
        </div>
    )
}

export default Widget
