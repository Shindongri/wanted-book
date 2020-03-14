import { BookAction, BookState } from './types'
import { createReducer } from 'typesafe-actions'
import { SET_BOOKS } from './actions'

const initialState: BookState = {
  totalItems: 0,
  items: [],
}

const book = createReducer<BookState, BookAction>(initialState, {
  [SET_BOOKS]: (state, action) => ({ ...state, items: action.payload }),
})

export default book
