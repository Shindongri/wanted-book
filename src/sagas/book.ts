import { call, put, all, takeLatest } from 'redux-saga/effects'
import axios from 'axios'

import { setBook, setTotalItems, FETCH_BOOKS } from '../modules/book'

const fetchBooks = function*() {
  try {
    const {
      status,
      data: { items, totalItems },
    } = yield call(() => axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms'))

    if (status === 200) {
      yield put(setTotalItems(totalItems))
      yield put(setBook(items))
    }
  } catch (e) {
    console.error(e)
  }
}

export default function* userSaga() {
  yield all([takeLatest([FETCH_BOOKS], fetchBooks)])
}
