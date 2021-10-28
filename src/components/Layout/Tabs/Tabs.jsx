import { useState } from 'react'
import TabsContent from './TabsContent/TabsContent'

import './tabs.scss'

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
                        {heading.name}
                    </div>
                ))}
            </div>
            <div className="tabs-content"></div>
            <TabsContent
                tab={tabsHeadingContent[activeTab].payload}
                index={activeTab}
            />
        </div>
    )
}

export default Tabs
