import { createSlice } from '@reduxjs/toolkit';

export const pageConfigSlice = createSlice({
  name: "pageConfig",
  initialState: {
    theme: 'light'
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
    }
  }
})

export const { setTheme } = pageConfigSlice.actions;

export const selectPageConfig = (state) => state.page

export default pageConfigSlice.reducer;
