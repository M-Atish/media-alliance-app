import './dashboard.scss'
import '../../App.scss'

import { logoImg } from '../../assets'

import NavBar from '../../components/Layout/Navigation/Navbar/NavBar'
import { routePaths } from '../../global/constants/routePaths'

const Dashboard = () => {
    const dummyData = [
        {
            item: 'Media Alliance',
            type: 'logo',
            urlLink: '/',
            picture: logoImg,
        },
        {
            item: 'समाचार',
            type: 'text',
            urlLink: routePaths.news.moduleSubCategory,
            picture: '',
        },
        {
            item: 'विदेशी मुद्रा',
            type: 'text',
            urlLink: '/forex',
            picture: '',
        },
        {
            item: 'शेयर बजार',
            type: 'text',
            urlLink: '/share-market',
            picture: '',
        },
        {
            item: 'क्यालेन्डर',
            type: 'text',
            urlLink: '/calendar',
            picture: '',
        },
        {
            item: 'मिति परिवर्तन',
            type: 'text',
            urlLink: '/date-converter',
            picture: '',
        },
        {
            item: 'सुन/चाँदी मूल्य',
            type: 'text',
            urlLink: '/gold',
            picture: '',
        },
        {
            item: 'युनिकोड',
            type: 'text',
            urlLink: '/unicode',
            picture: '',
        },
        {
            item: 'ईएमआई क्यालकुलेटर',
            type: 'text',
            urlLink: '/emi-calculator',
            picture: '',
        },
        {
            item: 'शेयर क्यालकुलेटर',
            type: 'text',
            urlLink: '/share-calculator',
            picture: '',
        },
    ]
    return (
        <>
            <NavBar dummyData={dummyData} />
        </>
    )
}

export default Dashboard
