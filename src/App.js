import React, { useEffect, useState } from 'react'
import { QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import Routes from 'components/Routing/PublicRoute/Routes'
import { queryClient } from 'utils/queryClient'
import Loading from 'utils/helpers/loading/Loading'
import useStore from 'store/store'

import './App.scss'

const App = () => {
    const [spinner, setSpinner] = useState(true)
    const [visible, setVisible] = useState(true)

    const firstTime = useStore((store) => store.firstTime)

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
        setTimeout(() => setVisible(false), 2500)
    }, [])

    if (spinner) {
        return <Loading spinner={spinner} visible={visible} />
    }

    return (
        <div className="app-container">
            <QueryClientProvider client={queryClient}>
                <Router>
                    <Switch>
                        <Routes firstTime={firstTime} />
                    </Switch>
                </Router>
            </QueryClientProvider>
        </div>
    )
}

export default App
