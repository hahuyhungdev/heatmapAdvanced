import { configureStore } from '@reduxjs/toolkit';
import sidebarRightReducer from 'features/other/sidebarRightSlice';

import dataReducer from './dataSlice';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    sidebarRight: sidebarRightReducer,
  },
});
export default store;
