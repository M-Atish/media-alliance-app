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

import { routePaths } from '../../../global/constants/routePaths'
import ShareMarket from './../../../pages/ShareMarket/ShareMarket'
import Calendar from './../../../pages/Calendar/Calendar'
import DateConverter from './../../../pages/DateConverter/DateConverter'
import Gold from './../../../pages/Gold/Gold'
import Unicode from './../../../pages/Unicode/Unicode'
import EMICalculator from './../../../pages/EmiCalculator/EMICalculator'

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
            <Route exact path={routePaths.language} component={Language} />
            <Route
                path={routePaths.interestTopics}
                component={InterestTopics}
            />
        </Switch>
    ) : (
        <>
            <NavBar dummyData={dummyData} />
            <Switch>
                <Route
                    exact
                    path={routePaths.dashboard}
                    component={Dashboard}
                />
                <Route path={routePaths.news.base} component={News} />
                <Route path={routePaths.forex} component={Forex} />
                <Route path={routePaths.shareMarket} component={ShareMarket} />
                <Route
                    path={routePaths.shareCalculator}
                    component={ShareCalculator}
                />
                <Route path={routePaths.shareMarket} component={ShareMarket} />
                <Route path={routePaths.calendar} component={Calendar} />
                <Route
                    path={routePaths.dateConverter}
                    component={DateConverter}
                />
                <Route path={routePaths.gold} component={Gold} />
                <Route path={routePaths.unicode} component={Unicode} />
                <Route
                    path={routePaths.emiCalculator}
                    component={EMICalculator}
                />

                <Route path="*" component={NotFirstTime} />
            </Switch>
        </>
    )
}

export default Routes
