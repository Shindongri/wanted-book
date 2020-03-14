import React from 'react'
import styled from 'styled-components'

const Container = styled.select`
  width: 300px;
  height: 40px;
  padding: 9px 20px;
  border: 0;
  border-radius: 3px;
  background-color: #f8f8fa;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: none;
  option {
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0 2px 1px;
  }
`

const Select: React.FC = ({ children }) => <Container>{children}</Container>

export default Select
