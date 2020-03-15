import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import Footer from '../components/Footer'
import Card from '../components/Card'
import CardList from '../components/CardList'
import Loading from '../components/Loading'

import useSearch from '../hooks/useSearch'
import { RootState } from '../modules'

import IntersectionObserver from '../io'
import { SET_CURRENT_INDEX, SET_START_INDEX } from '../modules/search'
import { FETCH_BOOKS } from '../modules/books'

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

  const cardRef = useRef<HTMLAnchorElement>(null)
  const io = IntersectionObserver(
    () => {
      setTimeout(() => {
        dispatch({ type: SET_CURRENT_INDEX, payload: currentIndex + 1 })
        dispatch({ type: SET_START_INDEX, payload: (currentIndex + 1) * maxResults })
      }, 200)
    },
    {
      threshold: 0,
      rootMargin: '-100px',
    },
  )

  const { items = [], loading } = useSelector((state: RootState) => state.books)
  const { printType, printTypeAll, currentIndex, maxResults } = useSelector((state: RootState) => state.search)

  useEffect(() => {
    if (cardRef.current) {
      io.observe(cardRef.current)
    }

    return () => {
      io.disconnect()
    }
  })

  useEffect(() => {
    dispatch({ type: FETCH_BOOKS, payload: { more: true } })
  }, [currentIndex, dispatch])

  const [onChangePrintType, onChangeSearchValue, onChangeOrderBy] = useSearch()

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
      <CardList loading={loading}>
        {items.map(
          ({ id, volumeInfo: { imageLinks, title, subtitle, authors, description, previewLink, averageRating } }) => (
            <Card
              ref={cardRef}
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
      <Loading visible={loading} />
      <Footer />
    </Container>
  )
}

export default React.memo(IndexPage)
