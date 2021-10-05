import { createSlice } from '@reduxjs/toolkit'

export const firstTimeSlice = createSlice({
    name: 'firstTime',
    initialState: {
        firstTime: false,
    },
    reducers: {
        firstTimePressed: (state) => {
            state.firstTime = false
        },
    },
})

export const { firstTimePressed } = firstTimeSlice.actions

export const selectFirstTimePressed = (state) => state.firstTime.firstTime

export default firstTimeSlice.reducer
