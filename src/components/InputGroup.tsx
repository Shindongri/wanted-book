import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

type InputGroupProps = {
  label: string;
  children: React.ReactElement | React.ReactElement[];
}

const InputGroup: React.FC<InputGroupProps> = ({ label, children }) => (
  <Container>
    <small>{ label }</small>
    <div>
      { children }
    </div>
  </Container>
)

export default InputGroup
