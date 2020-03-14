import { createAction } from 'typesafe-actions'
import { Book } from './types'

/* 액션 Type */
export const FETCH_BOOKS = 'book/FETCH_BOOKS'
export const SET_BOOKS = 'book/SET_BOOKS'
export const SET_TOTAL_ITEMS = 'book/SET_TOTAL_ITEMS'

/* 액션 생성 함수 */
export const fetchBooks = createAction(FETCH_BOOKS)()
export const setBook = createAction(SET_BOOKS)<Book[]>()
export const setTotalItems = createAction(SET_TOTAL_ITEMS)<number>()

