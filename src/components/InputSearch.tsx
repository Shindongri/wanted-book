import React, { useCallback } from 'react'
import styled from 'styled-components'

import useInput from '../hooks/useInput'
import Button from './Button'
import InputGroup from './InputGroup'

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
  margin-left: 8px;
`

type InputSearch = {
  label: string
  onClick: (searchValue: string) => void
}

const InputSearch: React.FC<InputSearch> = ({ label, onClick }) => {
  const [searchValue, setSearchValue, reset] = useInput('')

  const submit = useCallback(() => {
    onClick(searchValue)
    reset()
  }, [searchValue])

  return (
    <InputGroup label={label}>
      <Container>
        <Input
          placeholder="책 제목, 저자"
          onInput={setSearchValue}
          onKeyDown={e => (e.key === 'Enter' ? submit() : null)}
        />
        <SearchButton primary value="submit" onClick={submit}>
          검색
        </SearchButton>
      </Container>
    </InputGroup>
  )
}

export default InputSearch
