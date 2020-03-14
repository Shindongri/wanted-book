import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Input = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 40px;
  padding: 9px 20px;
  border: 0;
  border-radius: 3px;
  font-size: 16px;
  font-weight: 600;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  background-color: #f8f8fa;
`

const SearchButton = styled(Button)`
  margin-left: 4px;
`

const InputSearch: React.FC = () => (
  <Container>
    <Input />
    <SearchButton primary>검색</SearchButton>
  </Container>
)

export default InputSearch
