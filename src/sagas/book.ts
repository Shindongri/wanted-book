import { call, put, all, takeLatest, select } from 'redux-saga/effects'
import axios from 'axios'

import { setBook, setTotalItems, FETCH_BOOKS } from '../modules/books'

const fetchBooks = function*() {
  const searchValue = yield select(state => state.search.searchValue)
  const printTypes = yield select(state => state.search.printType)
  const printTypeAll = yield select(state => state.search.printTypeAll)
  const orderBy = yield select(state => state.search.orderBy)

  const q = searchValue === '' ? 'intitle:' : `intitle:${searchValue}+inauthor:${searchValue}`

  const printType = printTypeAll ? 'all' : printTypes[0]

  try {
    const {
      status,
      data: { items, totalItems },
    } = yield call(() =>
      axios.get('https://www.googleapis.com/books/v1/volumes', { params: { q, orderBy, printType } }),
    )

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
