import { createAction } from 'typesafe-actions'
import { Book } from './types'

/* 액션 Type */
export const FETCH_BOOKS = 'books/FETCH_BOOKS'
export const SET_BOOKS = 'books/SET_BOOKS'
export const SET_TOTAL_ITEMS = 'books/SET_TOTAL_ITEMS'

/* 액션 생성 함수 */
export const fetchBooks = createAction(FETCH_BOOKS)<{ more: boolean }>()
export const setBook = createAction(SET_BOOKS)<Book[]>()
export const setTotalItems = createAction(SET_TOTAL_ITEMS)<number>()
