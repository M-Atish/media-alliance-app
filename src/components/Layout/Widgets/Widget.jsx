import './widget.scss'

import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Button from 'components/Layout/Button/Button'
import SwitchCheckBox from './SwitchCheckBox/SwitchCheckBox'

const Widget = ({
    widgetTitle,
    widgetTitleDesc,
    widgetPayload,
    checkBoxSlider,
    urlLink,
}) => {
    // Please remember that false corresponds to the gain section in the share market widget and true correspods to the loss section in the share market widget
    const [isChecked, setIsChecked] = useState(false)

    const { t } = useTranslation()

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
                    <NavLink exact to={urlLink}>
                        <Button
                            description={t('more')}
                            bgColor="blue"
                            size="extra-small"
                            color="black"
                        />
                    </NavLink>
                </div>
            </div>
            <div className="widget-table-container">
                <div className="widget-table-heading">
                    {widgetPayload?.heading &&
                        Array.isArray(widgetPayload.heading) &&
                        widgetPayload.heading.map((heading, index) => (
                            <div className="widget-heading-item" key={index}>
                                {heading}
                            </div>
                        ))}
                </div>

                <div className="widget-table-content">
                    {widgetPayload?.payload &&
                        Array.isArray(widgetPayload.payload) &&
                        widgetPayload.payload.map((item, index) => (
                            <div className="widget-item-container" key={index}>
                                <div className="widget-content-item">
                                    {item.symbol}
                                </div>
                                <div className="widget-content-item">
                                    {item.first}
                                </div>
                                <div className="widget-content-item">
                                    {item.second}
                                </div>
                                <div className="widget-content-item">
                                    {item.third}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default Widget
