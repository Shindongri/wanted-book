import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'
import SearchBox from '../components/SearchBox'
import Footer from '../components/Footer'
import Card from '../components/Card'
import CardList from '../components/CardList'

import { RootState } from '../modules'
import { FETCH_BOOKS } from '../modules/book'

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

  const items = useSelector((state: RootState) => state.book.items)

  return (
    <Container>
      <Header />
      <SearchBox />
      <CardList>
        {items.map(({ id, volumeInfo }) => (
          <Card
            key={id}
            id={id}
            thumbnail={
              volumeInfo && volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail
                ? volumeInfo.imageLinks.thumbnail
                : null
            }
            title={volumeInfo.title}
            subtitle={volumeInfo.subtitle}
            authors={volumeInfo.authors}
            description={volumeInfo.description}
            previewLink={volumeInfo.previewLink}
            averageRating={volumeInfo.averageRating}
          />
        ))}
      </CardList>
      <Footer />
    </Container>
  )
}

export default IndexPage
