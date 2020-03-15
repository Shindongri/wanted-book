import { ActionType } from 'typesafe-actions'

import * as actions from './actions'

export type BookAction = ActionType<typeof actions>

export type Book = {
  id: string
  volumeInfo: {
    imageLinks: {
      thumbnail: string
    }
    title: string
    subtitle: string
    authors: string[]
    previewLink: string
    description: string
    averageRating: number
  }
}

export type BookState = {
  loading: boolean
  totalItems: number
  items?: Book[]
}
