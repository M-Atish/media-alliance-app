// import { configureStore } from '@reduxjs/toolkit'
// import darkModeReducer from './darkModeSlice'
// import firstTimeReducer from './firstTime'
// import languageButtonReducer from './languageButtonSlice'

// export const store = configureStore({
//     reducer: {
//         languageButton: languageButtonReducer,
//         darkMode: darkModeReducer,
//         firstTime: firstTimeReducer,
//     },
// })

import create from 'zustand'

import { firstTimeSlice } from './firstTimeSlice'
import { darkModeSlice } from './darkModeSlice'

const useStore = create((set, get) => ({
    ...firstTimeSlice(set, get),
    ...darkModeSlice(set, get),
}))

export default useStore
