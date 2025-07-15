import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Slices/Auth';
import projectReducer from './Slices/Projects';
import teamReducer from './Slices/Teams';
import usersReducer from './Slices/Users';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    team: teamReducer,
    users: usersReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

