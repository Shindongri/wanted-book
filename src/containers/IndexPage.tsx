import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import Footer from '../components/Footer'
import Card from '../components/Card'
import CardList from '../components/CardList'

import { RootState } from '../modules'
import { FETCH_BOOKS } from '../modules/books'
import { SET_ORDER_BY, SET_PRINT_TYPE, SET_SEARCH_VALUE } from '../modules/search'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    padding: 24px 0;
  }

  .search-box {
    width: 100%;
    padding: 48px 0;
  }

  .card-list {
    width: 100%;
    padding-top: 48px;
  }

  footer {
    padding: 24px 0;
  }
`

const IndexPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: FETCH_BOOKS })
  }, [dispatch])

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

  const items = useSelector((state: RootState) => state.books.items || [])
  const printType = useSelector((state: RootState) => state.search.printType)
  const printTypeAll = useSelector((state: RootState) => state.search.printTypeAll)

  return (
    <Container>
      <Header />
      <SearchBox
        onChangePrintType={onChangePrintType}
        onChangeSearchValue={onChangeSearchValue}
        onChangeOrderBy={onChangeOrderBy}
        printType={printType}
        printTypeAll={printTypeAll}
      />
      <CardList>
        {items.map(
          ({ id, volumeInfo: { imageLinks, title, subtitle, authors, description, previewLink, averageRating } }) => (
            <Card
              key={id}
              id={id}
              thumbnail={imageLinks && imageLinks.thumbnail ? imageLinks.thumbnail : null}
              title={title}
              subtitle={subtitle}
              authors={authors}
              description={description}
              previewLink={previewLink}
              averageRating={averageRating}
            />
          ),
        )}
      </CardList>
      <Footer />
    </Container>
  )
}

export default IndexPage
