import { combineReducers, configureStore } from '@reduxjs/toolkit';
import totalCounters from './reducers/totalCounters';

const rootReducer = combineReducers({
  totalCounters,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
