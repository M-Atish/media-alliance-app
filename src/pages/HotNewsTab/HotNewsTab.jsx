import Tabs from 'components/Layout/Tabs/Tabs'
import { useMemo } from 'react'

const HotNewsTab = () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const tabsHeadingContent = [
        {
            name: 'ताजा खबर',
            payload: [
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
                { desc: "Tab1's description" },
            ],
        },
        {
            name: 'लोकप्रिय',
            payload: [
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
                { desc: "Tab2's description" },
            ],
        },
        {
            name: 'ट्रेन्डिङ',
            payload: [
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
                { desc: "Tab3's description" },
            ],
        },
    ]

    return useMemo(
        () => <Tabs tabsHeadingContent={tabsHeadingContent} />,
        [tabsHeadingContent]
    )
}

export default HotNewsTab
