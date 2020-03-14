import React from 'react'
import styled from 'styled-components'

const Container = styled.a`
  width: 100%;
  text-decoration: none;
  color: #fff;
`

const Image = styled.img``

const Rating = styled.span`
  font-size: 12px;
  position: absolute;
  right: 4px;
  bottom: 4px;
  opacity: 0;
`

const ImageWrapper = styled.div`
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`

const Title = styled.div`
  text-overflow: ellipsis;
`

const Author = styled.small`
  text-overflow: ellipsis;
`

export type CardProps = {
  id: string
  thumbnail: string | null
  title: string
  subtitle: string
  authors: string[]
  previewLink: string
  description: string
  averageRating: number
}

const Card: React.FC<CardProps> = ({ thumbnail, title, authors, previewLink, averageRating }) => {
  return (
    <Container href={previewLink}>
      <ImageWrapper>
        <Image src={thumbnail || ''} alt="" />
        <Rating>
          <span role="img" aria-label="rating">
            ★
          </span>{' '}
          {averageRating} / 5
        </Rating>
      </ImageWrapper>
      <Title>{title}</Title>
      <Author>{authors.join(',')}</Author>
    </Container>
  )
}

export default Card
