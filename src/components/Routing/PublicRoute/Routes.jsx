import { Route, Switch } from 'react-router'

// Pages
import News from '../../../pages/News/News'
import Forex from '../../../pages/Forex/Forex'
import ShareCalculator from '../../../pages/ShareCalculator/ShareCalculator'
import Language from '../../../pages/Language/Language'
import InterestTopics from '../../../pages/InterestTopics/InterestTopics'
import Dashboard from '../../../pages/Dashboard/Dashboard'
import ErrorPage from '../../../utils/helpers/error/ErrorPage'
import NavBar from '../../Layout/Navigation/Navbar/NavBar'
import ShareMarket from './../../../pages/ShareMarket/ShareMarket'
import Calendar from './../../../pages/Calendar/Calendar'
import DateConverter from './../../../pages/DateConverter/DateConverter'
import Gold from './../../../pages/Gold/Gold'
import Unicode from './../../../pages/Unicode/Unicode'
import EMICalculator from './../../../pages/EmiCalculator/EMICalculator'

// Constants
import { routePaths } from '../../../global/constants/routePaths'
import { dummyData } from '../../../global/constants/dummyData'
import NewsSinglePage from './../../../pages/News/NewsSinglePage/NewsSinglePage'

const Routes = ({ firstTime }) => {
    return firstTime ? (
        <Switch>
            <Route exact path={routePaths.language} component={Language} />
            <Route
                path={routePaths.interestTopics}
                component={InterestTopics}
            />
            <Route path="*" component={ErrorPage} />
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
                <Route path="/news/details" component={NewsSinglePage} />
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
                <Route path="*" component={ErrorPage} />
            </Switch>
        </>
    )
}

export default Routes
