import { Route, Switch } from 'react-router'

import { logoImg } from '../../../assets'

import News from '../../../pages/News/News'
import Forex from '../../../pages/Forex/Forex'
import ShareCalculator from '../../../pages/ShareCalculator/ShareCalculator'
import Language from '../../../pages/Language/Language'
import InterestTopics from '../../../pages/InterestTopics/InterestTopics'
import Dashboard from '../../../pages/Dashboard/Dashboard'
import NotFirstTime from '../../../utils/helpers/notFirstTime/NotFirstTime'
import NavBar from '../../Layout/Navigation/Navbar/NavBar'

const Routes = ({ firstTime }) => {
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
            urlLink: '/news',
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
            urlLink: '/emi',
            picture: '',
        },
        {
            item: 'शेयर क्यालकुलेटर',
            type: 'text',
            urlLink: '/share-calculator',
            picture: '',
        },
    ]
    return firstTime ? (
        <Switch>
            <Route exact path="/" component={Language} />
            <Route path="/interested-topics" component={InterestTopics} />
        </Switch>
    ) : (
        <>
            <NavBar dummyData={dummyData} />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/news" component={News} />
                <Route path="/forex" component={Forex} />
                <Route path="/share-calculator" component={ShareCalculator} />
                <Route path="*" component={NotFirstTime} />
            </Switch>
        </>
    )
}

export default Routes
