import React from 'react'
import styled from 'styled-components'

import InputSearch from './InputSearch'
import InputPrintType from './InputPrintType'
import InputSorting from './InputSorting'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 3px;
`

type SearchBoxProps = {
  onChangePrintType: (e: React.MouseEvent<HTMLButtonElement>) => void
  onChangeOrderBy: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onChangeSearchValue: (searchValue: string) => void
  printType: string[]
  printTypeAll: boolean
}

const SearchBox: React.FC<SearchBoxProps> = ({
  onChangePrintType,
  onChangeSearchValue,
  onChangeOrderBy,
  printType,
  printTypeAll,
}) => {
  return (
    <Container className="search-box">
      <InputSorting label="정렬" onChange={onChangeOrderBy} />
      <InputPrintType
        label="프린트 타입"
        selectedValues={printType}
        checkAll={printTypeAll}
        onClick={onChangePrintType}
      />
      <InputSearch label="검색" onClick={onChangeSearchValue} />
    </Container>
  )
}

export default SearchBox
