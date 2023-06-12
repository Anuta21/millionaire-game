import { configureStore } from '@reduxjs/toolkit';
import { gamePageSlice } from './reducers';

export const store = configureStore({
  reducer: {
    gamePageReducer: gamePageSlice.reducer,
  },
  middleware: [],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
