import Select from './Select'
import InputGroup from './InputGroup'
import React from 'react'

type InputSorting = {
  label: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const InputSorting: React.FC<InputSorting> = ({ label, onChange }) => {
  return (
    <InputGroup label={label}>
      <Select defaultValue="relevance" onChange={onChange}>
        <option value="relevance">관련도 높은순</option>
        <option value="newest">최신순</option>
      </Select>
    </InputGroup>
  )
}

export default InputSorting
