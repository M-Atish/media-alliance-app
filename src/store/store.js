import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from './darkModeSlice';
import firstTimeReducer from "./firstTime";
import languageButtonReducer from './languageButtonSlice';

export const store = configureStore({
    reducer: {
        languageButton: languageButtonReducer,
        darkMode: darkModeReducer,
        firstTime: firstTimeReducer
    }
})