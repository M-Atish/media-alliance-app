import './tabsContent.scss'

import SingleTabContent from './SingleTabContent/SingleTabContent'

const TabsContent = ({ tab }) => {
    return (
        <div className="tab-content-container">
            {tab?.map((data, index) => (
                <SingleTabContent payload={data} key={index} />
            ))}
        </div>
    )
}

export default TabsContent
