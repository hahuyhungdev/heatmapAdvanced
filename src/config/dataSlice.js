import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      username: [
        {
          x: 12,
          y: 12,
          value: 93,
        },
      ],
      date: 1671044565,
    },
    {
      username: [
        {
          x: 712,
          y: 502,
          value: 13,
        },
      ],
      date: 1671176800,
    },
    {
      username: [
        {
          x: 513,
          y: 394,
          value: 29,
        },
        {
          x: 513,
          y: 398,
          value: 16,
        },
        {
          x: 512,
          y: 400,
          value: 4,
        },
        {
          x: 512,
          y: 402,
          value: 13,
        },
        {
          x: 512,
          y: 405,
          value: 35,
        },
        {
          x: 512,
          y: 408,
          value: 59,
        },
        {
          x: 511,
          y: 410,
          value: 39,
        },
        {
          x: 511,
          y: 413,
          value: 33,
        },
        {
          x: 511,
          y: 416,
          value: 1,
        },
        {
          x: 511,
          y: 419,
          value: 83,
        },
        {
          x: 511,
          y: 421,
          value: 85,
        },
        {
          x: 509,
          y: 426,
          value: 58,
        },
        {
          x: 509,
          y: 428,
          value: 89,
        },
        {
          x: 509,
          y: 431,
          value: 46,
        },
        {
          x: 509,
          y: 435,
          value: 18,
        },
        {
          x: 509,
          y: 438,
          value: 14,
        },
        {
          x: 509,
          y: 442,
          value: 36,
        },
        {
          x: 509,
          y: 446,
          value: 7,
        },
        {
          x: 509,
          y: 449,
          value: 46,
        },
        {
          x: 509,
          y: 453,
          value: 27,
        },
        {
          x: 509,
          y: 455,
          value: 77,
        },
        {
          x: 509,
          y: 459,
          value: 56,
        },
        {
          x: 509,
          y: 462,
          value: 43,
        },
      ],
      date: 1672045200,
    },
    {
      username: [
        {
          x: 812,
          y: 802,
          value: 75,
        },
      ],
      date: 1671699600,
    },
  ],
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
      state.data = action.payload;
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
