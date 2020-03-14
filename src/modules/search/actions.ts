import { createAction } from 'typesafe-actions'

/* 액션 Type */
export const SET_PRINT_TYPE = 'search/SET_PRINT_TYPE'
export const SET_ORDER_BY = 'search/SET_ORDER_BY'
export const SET_SEARCH_VALUE = 'search/SET_SEARCH_VALUE'

/* 액션 생성 함수 */
export const setPrintType = createAction(SET_PRINT_TYPE)<string>()
export const setOrderBy = createAction(SET_ORDER_BY)<string>()
export const setSearchValue = createAction(SET_SEARCH_VALUE)<string>()
