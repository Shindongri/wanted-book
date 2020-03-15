import { useCallback } from 'react'
import { SET_ORDER_BY, SET_PRINT_TYPE, SET_SEARCH_VALUE } from '../modules/search'
import { FETCH_BOOKS } from '../modules/books'
import { useDispatch } from 'react-redux'

const useSearch = () => {
  const dispatch = useDispatch()

  const onChangePrintType = useCallback(
    e => {
      dispatch({ type: SET_PRINT_TYPE, payload: e.target.value })
      dispatch({ type: FETCH_BOOKS })
    },
    [dispatch],
  )
  const onChangeSearchValue = useCallback(
    searchValue => {
      dispatch({ type: SET_SEARCH_VALUE, payload: searchValue })
      dispatch({ type: FETCH_BOOKS })
    },
    [dispatch],
  )
  const onChangeOrderBy = useCallback(
    e => {
      dispatch({ type: SET_ORDER_BY, payload: e.target.value })
      dispatch({ type: FETCH_BOOKS })
    },
    [dispatch],
  )

  return [onChangePrintType, onChangeSearchValue, onChangeOrderBy] as [
    typeof onChangePrintType,
    typeof onChangeSearchValue,
    typeof onChangeOrderBy,
  ]
}

export default useSearch
