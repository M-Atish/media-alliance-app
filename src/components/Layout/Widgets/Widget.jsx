import './widget.scss'

import Button from 'components/Layout/Button/Button'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
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

    console.log(widgetPayload)

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
                    <Button
                        description={t('more')}
                        bgColor="blue"
                        size="extra-small"
                        color="black"
                    />
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
                            <div className="widget-item-container">
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
                {/* <table className="widget-table-container">
                    <thead className="widget-heading">
                        <tr className="widget-heading-row">
                            {widgetPayload?.heading &&
                                Array.isArray(widgetPayload.heading) &&
                                widgetPayload.heading.map((heading, index) => (
                                    <th
                                        className="widget-heading-row-item"
                                        key={index}
                                    >
                                        {heading}
                                    </th>
                                ))}
                        </tr>
                    </thead>
                    <tbody className="widget-content">
                        {widgetPayload?.payload &&
                            Array.isArray(widgetPayload.payload) &&
                            widgetPayload.payload.map((item, index) => (
                                <tr className="widget-content-row" key={index}>
                                    <td>{item.symbol}</td>
                                    <td>{item.first}</td>
                                    <td>{item.second}</td>
                                    <td>{item.third}</td>
                                </tr>
                            ))}
                    </tbody>
                </table> */}
            </div>
        </div>
    )
}

export default Widget
