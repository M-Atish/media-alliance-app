import './tabsContent.scss'

const TabsContent = ({ tab }) => {
    return (
        <div className="tab-content-container">
            {tab?.map((data, position) => (
                <p className={`tab-content ${position} `} key={position}>
                    {data.desc}
                </p>
            ))}
        </div>
    )
}

export default TabsContent
