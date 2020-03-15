import { createAction } from 'typesafe-actions'

/* 액션 Type */
export const SET_PRINT_TYPE = 'search/SET_PRINT_TYPE'
export const SET_ORDER_BY = 'search/SET_ORDER_BY'
export const SET_SEARCH_VALUE = 'search/SET_SEARCH_VALUE'
export const SET_START_INDEX = 'search/SET_START_INDEX'
export const SET_CURRENT_INDEX = 'search/SET_CURRENT_INDEX'

/* 액션 생성 함수 */
export const setPrintType = createAction(SET_PRINT_TYPE)<string>()
export const setOrderBy = createAction(SET_ORDER_BY)<string>()
export const setSearchValue = createAction(SET_SEARCH_VALUE)<string>()
export const setStartIndex = createAction(SET_START_INDEX)<number>()
export const setCurrentIndex = createAction(SET_CURRENT_INDEX)<number>()
