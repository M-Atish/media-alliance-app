import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import {
    BrowserRouter as Router,
    Route,
    Switch,
    useLocation,
} from 'react-router-dom'

import './App.scss'

import NavBar from './components/Layout/Navigation/Navbar/NavBar'

import Dashboard from './pages/Dashboard/Dashboard'
import Forex from './pages/Forex/Forex'
import Language from './pages/Language/Language'
import News from './pages/News/News'
import ShareCalculator from './pages/ShareCalculator/ShareCalculator'
import InterestTopics from './pages/InterestTopics/InterestTopics'

import { selectFirstTimePressed } from './store/firstTime'

import Loading from './utils/helpers/loading/Loading'
import NotFirstTime from './utils/helpers/notFirstTime/NotFirstTime'

const App = () => {
    const [spinner, setSpinner] = useState(true)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
        setTimeout(() => setVisible(false), 2500)
    }, [])

    if (spinner) {
        return <Loading spinner={spinner} visible={visible} />
    }

    return (
        <div className="app-container">
            <Router>
                <Switch>
                    <Route path="/" component={AnimationApp} />
                    <Route component={NotFirstTime} />
                </Switch>
            </Router>
        </div>
    )
}

function AnimationApp() {
    let location = useLocation()
    const firstTime = useSelector(selectFirstTimePressed)

    return (
        <>
            {!firstTime && <NavBar />}
            <Switch location={location}>
                {firstTime ? (
                    <>
                        <Route exact path="/" component={Language} />
                        <Route
                            path="/interested-topics"
                            component={InterestTopics}
                        />
                    </>
                ) : (
                    <>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/news" component={News} />
                        <Route path="/forex" component={Forex} />
                        <Route
                            path="/interested-topics"
                            component={NotFirstTime}
                        />
                        <Route
                            path="/share-calculator"
                            component={ShareCalculator}
                        />
                    </>
                )}
            </Switch>
        </>
    )
}

export default App
