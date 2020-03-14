import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  h6 {
    font-size: 16px;
    font-weight: 400;
    color: #999;
    margin: 0 0 10px;
  }
  .input-group {
    margin-top: 16px;
    display: flex;
    .input {
      margin-right: 9px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`

type InputGroupProps = {
  label: string
  children: React.ReactElement | React.ReactElement[]
}

const InputGroup: React.FC<InputGroupProps> = ({ label, children }) => (
  <Container>
    <h6>{label}</h6>
    <div className="input-group">{children}</div>
  </Container>
)

export default InputGroup
