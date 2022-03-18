import {all} from 'redux-saga/effects';
import {wheatherWatcher} from './weather';

function* rootSaga() {
  yield all([wheatherWatcher()]);
}

export default rootSaga;
