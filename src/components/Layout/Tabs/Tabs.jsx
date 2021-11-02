import { useState } from 'react'
import TabsContent from './TabsContent/TabsContent'

import './tabs.scss'

import { RiArrowDownSLine } from 'react-icons/ri'
import classNames from 'classnames'

const Tabs = ({ tabsHeadingContent }) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="tabs">
            <div className="tabs-nav">
                {tabsHeadingContent?.map((heading, index) => (
                    <div
                        className="tab-heading"
                        onClick={() => setActiveTab(index)}
                        key={index}
                    >
                        <p
                            className={classNames('tab-heading-text', {
                                active: activeTab === index,
                            })}
                        >
                            {heading.name}
                        </p>
                    </div>
                ))}
            </div>
            <div className="tabs-content">
                <TabsContent
                    tab={
                        tabsHeadingContent[activeTab]?.payload
                            ? tabsHeadingContent[activeTab].payload
                            : null
                    }
                    index={activeTab}
                />
            </div>
            <div className="tabs-add-more">
                <p className="tabs-add-more-text">अधिक </p>
                <span className="tabs-add-more-icon">
                    <RiArrowDownSLine />
                </span>
            </div>
        </div>
    )
}

export default Tabs
