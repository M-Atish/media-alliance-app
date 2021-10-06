import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { BrowserRouter as Router, Switch } from 'react-router-dom'

import './App.scss'

import { selectFirstTimePressed } from './store/firstTime'

import Loading from './utils/helpers/loading/Loading'
import Routes from './components/Routing/PublicRoute/Routes'

const App = () => {
    const [spinner, setSpinner] = useState(true)
    const [visible, setVisible] = useState(true)

    const firstTime = useSelector(selectFirstTimePressed)

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
                    <Routes firstTime={firstTime} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
