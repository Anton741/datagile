import { configureStore } from '@reduxjs/toolkit';

import countersReducer from './countersSlice';


export const store = configureStore({
  reducer: {
      counters: countersReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>