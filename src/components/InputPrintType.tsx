import InputGroup from './InputGroup'
import Button from './Button'
import React from 'react'

type InputPrintType = {
  label: string
  selectedValues: string[]
  checkAll: boolean
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const isInclude = (values: string, selectedValues: string[]) => selectedValues.includes(values)

const InputPrintType: React.FC<InputPrintType> = ({ label, selectedValues, onClick, checkAll }) => (
  <InputGroup label={label}>
    <Button value="all" primary={checkAll} onClick={onClick}>
      전체
    </Button>
    <Button value="books" primary={isInclude('books', selectedValues)} onClick={onClick}>
      책
    </Button>
    <Button value="magazines" primary={isInclude('magazines', selectedValues)} onClick={onClick}>
      잡지
    </Button>
  </InputGroup>
)

export default InputPrintType
