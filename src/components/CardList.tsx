import React from 'react'
import styled from 'styled-components'

import { CardProps } from './Card'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  grid-column-gap: 24px;
  grid-row-gap: 36px;
`

type CardListProps = {
  children: React.ReactElement<CardProps>[];
}

const CardList: React.FC<CardListProps> = ({ children }) => (
  <Container>
    { children }
  </Container>
)

export default CardList
