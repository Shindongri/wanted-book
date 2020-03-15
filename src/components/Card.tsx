import React, { forwardRef } from 'react'
import styled from 'styled-components'

const Container = styled.a`
  width: 100%;
  text-decoration: none;
  color: #fff;
  place-self: stretch stretch;
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
  margin-top: 4px;
  font-weight: bold;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 120px;
`

const Author = styled.div`
  margin-top: 8px;
  text-overflow: ellipsis;
  font-size: 10px;
  overflow: hidden;
  white-space: nowrap;
  width: 120px;
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
  ref: React.Ref<HTMLAnchorElement>
}

const Card: React.FC<CardProps> = forwardRef(({ thumbnail, title, authors, previewLink, averageRating }, ref) => (
  <Container ref={ref} href={previewLink}>
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
    <Author>{authors ? authors.join(',') : ''}</Author>
  </Container>
))

export default Card
