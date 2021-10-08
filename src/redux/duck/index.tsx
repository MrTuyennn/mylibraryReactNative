import {combineReducers} from '@reduxjs/toolkit';
import counterReducer from './Count/counterSlice';
import CounterSaga from './Count/counterSaga';
import {all} from 'redux-saga/effects';

export const rootReducer = combineReducers({
  counter: counterReducer,
});

export default function* rootSaga() {
  yield all([CounterSaga()]);
}
