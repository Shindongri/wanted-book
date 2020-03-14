import React from 'react'
import styled from 'styled-components'

import InputGroup from './InputGroup'
import InputSearch from './InputSearch'
import Radio from "./Radio";
import Checkbox from "./Checkbox";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

const SearchBox: React.FC = () => (
  <Container>
    <InputGroup label="정렬">
      <Radio label="관련도 높은 순" />
      <Radio label="최근 순" />
    </InputGroup>

    <InputGroup label="프린트 타입">
      <Checkbox label="모두" />
      <Checkbox label="책" />
      <Checkbox label="잡지" />
    </InputGroup>

    <InputGroup label="검색">
      <InputSearch />
    </InputGroup>
  </Container>
)

export default SearchBox
