import React from 'react'
import styled from 'styled-components'

import { CardProps } from './Card'

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 36px;
`

type CardListProps = {
  children: React.ReactElement<CardProps>[]
}

const CardList: React.FC<CardListProps> = ({ children }) => <Container className="card-list">{children}</Container>

export default CardList
