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

const Container = styled.section``

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
        {
          items.map(({ id, volumeInfo }) => (
            <Card key={ id }
                  id={ id }
                  thumbnail={ volumeInfo && volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail ? volumeInfo.imageLinks.smallThumbnail : null }
                  title={ volumeInfo.title }
                  subtitle={ volumeInfo.subtitle }
                  authors={ volumeInfo.authors }
                  description={ volumeInfo.description }
                  previewLink={ volumeInfo.previewLink }
                  averageRating={ volumeInfo.averageRating }
            />
          ))
        }
      </CardList>
      <Footer />
    </Container>
  )
}

export default IndexPage
