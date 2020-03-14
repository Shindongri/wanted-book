import React from 'react'
import styled from 'styled-components'

import InputGroup from './InputGroup'
import InputSearch from './InputSearch'
import Button from './Button'
import Select from './Select'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 3px;
`

const SearchBox: React.FC = () => (
  <Container className="search-box">
    <InputGroup label="정렬">
      <Select>
        <option>관련도 높은순</option>
        <option>최신순</option>
      </Select>
    </InputGroup>

    <InputGroup label="프린트 타입">
      <Button>전체</Button>
      <Button>책</Button>
      <Button>잡지</Button>
    </InputGroup>

    <InputGroup label="검색">
      <InputSearch />
    </InputGroup>
  </Container>
)

export default SearchBox
