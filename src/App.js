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

// function AnimationApp() {
//     let location = useLocation()
//     const firstTime = useSelector(selectFirstTimePressed)

//     return (
//         <>
//             {!firstTime && <NavBar />}
//             <Switch location={location}>
//                 {firstTime ? (
//                     <>
//                         <Route exact path="/" component={Language} />
//                         <Route
//                             path="/interested-topics"
//                             component={InterestTopics}
//                         />
//                     </>
//                 ) : (
//                     <>
//                         <Route exact path="/" component={Dashboard} />
//                         <Route path="/news" component={News} />
//                         <Route path="/forex" component={Forex} />
//                         <Route
//                             path="/interested-topics"
//                             component={NotFirstTime}
//                         />
//                         <Route
//                             path="/share-calculator"
//                             component={ShareCalculator}
//                         />
//                     </>
//                 )}
//                 <Route path="*" component={NotFirstTime} />
//             </Switch>
//         </>
//     )
// }

export default App
