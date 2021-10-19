import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

import { Provider } from 'react-redux'
import { store } from './store/store'

import App from './App'
// Taking lightning and sticking it in a rock until it learns to think is the prime definition of what a computer is.

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
