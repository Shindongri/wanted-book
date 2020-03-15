import { call, put, all, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'

import { setBook, setTotalItems, FETCH_BOOKS } from '../modules/books'

const fetchBooks = function*({ payload: { more } }: any) {
  const searchValue = yield select(state => state.search.searchValue)
  const printTypes = yield select(state => state.search.printType)
  const printTypeAll = yield select(state => state.search.printTypeAll)
  const orderBy = yield select(state => state.search.orderBy)
  const startIndex = yield select(state => state.search.startIndex)
  const maxResults = yield select(state => state.search.maxResults)

  const prevItems = yield select(state => state.books.items)

  const q = searchValue === '' ? 'intitle:' : `intitle:${searchValue}+inauthor:${searchValue}`

  const printType = printTypeAll ? 'all' : printTypes[0]

  try {
    const {
      status,
      data: { items = [], totalItems },
    } = yield call(() =>
      axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: { q, orderBy, printType, maxResults, startIndex },
      }),
    )

    if (status === 200) {
      yield put(setBook(more ? [...prevItems, ...items] : items))
      yield put(setTotalItems(totalItems))
    }
  } catch (e) {
    console.error(e)
  }
}

export default function* userSaga() {
  yield all([takeEvery([FETCH_BOOKS], fetchBooks)])
}
