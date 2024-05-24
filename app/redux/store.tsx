import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;

export default store;
