import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  primary?: boolean
  value: string
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
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

const Button: React.FC<ButtonProps> = ({ children, primary, value, onClick }) => (
  <Container className="input" primary={primary} value={value} onClick={onClick}>
    {children}
  </Container>
)

export default Button
