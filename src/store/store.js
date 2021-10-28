import create from 'zustand'

import { firstTimeSlice } from './firstTimeSlice'
import { darkModeSlice } from './darkModeSlice'

const useStore = create((set, get) => ({
    ...firstTimeSlice(set, get),
    ...darkModeSlice(set, get),
}))

export default useStore
