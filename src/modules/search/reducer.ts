import { SearchAction, Search } from './types'
import { createReducer } from 'typesafe-actions'
import { SET_PRINT_TYPE, SET_ORDER_BY, SET_SEARCH_VALUE } from './actions'

const initialState: Search = {
  printTypeAll: true,
  printType: ['books', 'magazines'],
  orderBy: 'relevance',
  searchValue: '',
}

const book = createReducer<Search, SearchAction>(initialState, {
  [SET_PRINT_TYPE]: (state, action) => {
    switch (action.payload) {
      case 'all': {
        return {
          ...state,
          printTypeAll: !state.printTypeAll,
          printType: state.printTypeAll ? [] : ['books', 'magazines'],
        }
      }
      case 'books':
      case 'magazines': {
        return {
          ...state,
          printTypeAll: state.printType.includes(action.payload)
            ? ['books', 'magazines'].every(printType =>
                [...state.printType].filter(printType => printType !== action.payload).includes(printType),
              )
            : ['books', 'magazines'].every(printType => [...state.printType, action.payload].includes(printType)),
          printType: state.printType.includes(action.payload)
            ? [...state.printType].filter(printType => printType !== action.payload)
            : [...state.printType, action.payload],
        }
      }
      default:
        return state
    }
  },
  [SET_ORDER_BY]: (state, action) => ({ ...state, orderBy: action.payload }),
  [SET_SEARCH_VALUE]: (state, action) => ({ ...state, searchValue: action.payload }),
})

export default book
