import React from 'react'
import styled from "styled-components"

const Input = styled.input``

type CheckboxProps = {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => (
  <label>
    <Input type="checkbox" />
    { label }
  </label>
)

export default Checkbox
