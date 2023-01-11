import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isVisableLineTrace: false,
};
const sidebarRightSlice = createSlice({
  name: 'sidebarRight',
  initialState,
  reducers: {
    toggleLineTrace: (state, action) => {
      state.isVisableLineTrace = action.payload;
    },
  },
});
export const sidebarRightSelector = (state) => state.sidebarRight;
export const { toggleLineTrace } = sidebarRightSlice.actions;
export default sidebarRightSlice.reducer;
