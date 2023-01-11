/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getData: (state) => {
      state.loading = true;
    },
    getDataSuccess: (state, action) => {
      state.loading = false;
    },
    getDataFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});
export const getDataSelector = (state) => state.data;
export const { getData, getDataSuccess, getDataFailure } = dataSlice.actions;
export default dataSlice.reducer;
