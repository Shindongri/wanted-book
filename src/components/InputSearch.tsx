import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Input = styled.input`

`

const SearchButton = styled.button``

const InputSearch: React.FC = () => (
  <Container>
    <Input />
    <SearchButton>
      검색
    </SearchButton>
  </Container>
)

export default InputSearch
