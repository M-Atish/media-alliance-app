import { createSlice } from '@reduxjs/toolkit';

export const languageButtonSlice = createSlice({
  name: 'languageButton',
  initialState: {
    active: false,
  },
  reducers: {
    buttonPressed: (state) => {
      state.active = !state.active;
    }
  }
})

export const { buttonPressed } = languageButtonSlice.actions;

export const selectButtonActive = state => state.languageButton.active;

export default languageButtonSlice.reducer;
