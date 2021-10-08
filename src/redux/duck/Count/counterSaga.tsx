import {delay, put, fork, all, takeLatest} from '@redux-saga/core/effects';
import {PayloadAction} from '@reduxjs/toolkit';
import {incrementSaga, incrementSagaSuccess} from './counterSlice';

function* watchRequestNotify() {
  yield all([takeLatest(incrementSaga, Counter)]);
}

export default function* watchSagas() {
  yield all([fork(watchRequestNotify)]);
}

function* Counter() {
  console.log('Waiting 1s');
  // Wait 1s
  yield delay(1000);

  console.log('Waiting done, dispatch action');

  // Dispatch action success
  yield put(incrementSagaSuccess(15));
}
