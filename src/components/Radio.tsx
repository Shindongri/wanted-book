import React from 'react'
import styled from 'styled-components'

const Input = styled.input``

type RadioProps = {
  label: string;
}

const Radio: React.FC<RadioProps> = ({ label }) => (
  <label>
    <Input type="radio" name="" value="" />
    { label }
  </label>
)

export default Radio
