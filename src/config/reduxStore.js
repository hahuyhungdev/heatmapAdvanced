import { configureStore } from '@reduxjs/toolkit';

// import dataReducer from './dataSlice';
import sidebarRightReducer from './sidebarRightSlice';

export const store = configureStore({
  reducer: {
    // data: dataReducer,
    sidebarRight: sidebarRightReducer,
  },
});
export default store;
