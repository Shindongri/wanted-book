import { BookAction, BookState } from './types'
import { createReducer } from 'typesafe-actions'
import { SET_BOOKS, SET_LOADING } from './actions'

const initialState: BookState = {
  loading: false,
  totalItems: 0,
  items: [],
}

const book = createReducer<BookState, BookAction>(initialState, {
  [SET_BOOKS]: (state, action) => ({ ...state, items: action.payload }),
  [SET_LOADING]: (state, action) => ({ ...state, loading: action.payload }),
})

export default book
