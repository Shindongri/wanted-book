import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  primary?: boolean
}

const Container = styled.button<{ primary?: boolean }>`
  color: ${({ primary }) => (primary ? '#f8f8fa' : '#333')};
  background-color: ${({ primary }) => (primary ? '#0092fc' : '#fff')};
  border-color: ${({ primary }) => (primary ? '#0092fc' : '#e1e2e3')};
  padding: 11px 13px;
  font-size: 15px;
  line-height: 1;
  font-weight: 600;
  cursor: pointer;
`

const Button: React.FC<ButtonProps> = ({ children, primary }) => (
  <Container className="input" primary={primary}>
    {children}
  </Container>
)

export default Button
