import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    active: false,
  },
  reducers: {
    darkClicked: (state) => {
      state.active = !state.active;
    }
  }
})

export const { darkClicked } = darkModeSlice.actions;

export const selectDarkActive = state => state.darkMode.active;

export default darkModeSlice.reducer;
