import { call, put, all, takeEvery, select } from 'redux-saga/effects'
import axios from 'axios'

import { setBook, setTotalItems, FETCH_BOOKS, setLoading } from '../modules/books'

const fetchBooks = function*({ payload: { more } }: any) {
  const { searchValue, printTypes, printTypeAll, orderBy, startIndex, maxResults } = yield select(state => state.search)

  const prevItems = yield select(state => state.books.items)

  const q = searchValue === '' ? 'intitle:' : `intitle:${searchValue}+inauthor:${searchValue}`

  const printType = printTypeAll ? 'all' : printTypes[0]

  yield put(setLoading(true))

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
  } finally {
    yield put(setLoading(false))
  }
}

export default function* userSaga() {
  yield all([takeEvery([FETCH_BOOKS], fetchBooks)])
}
