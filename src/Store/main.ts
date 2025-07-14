import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/Auth';
import projectReducer from './Slices/Projects';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

