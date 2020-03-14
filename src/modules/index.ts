import { combineReducers } from 'redux'

import books from './books'
import search from './search'

const rootReducer = combineReducers({
  books,
  search,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
