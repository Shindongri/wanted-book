import { all, fork } from 'redux-saga/effects'

import book from './book'

export default function* rootSaga() {
  yield all([fork(book)])
}
