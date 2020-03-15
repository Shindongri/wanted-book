import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type SearchAction = ActionType<typeof actions>

export type Search = {
  printTypeAll: boolean
  printType: string[]
  orderBy: string
  searchValue: string
  startIndex: number
  currentIndex: number
  maxResults: number
}
