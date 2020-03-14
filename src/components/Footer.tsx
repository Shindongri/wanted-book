import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Container = styled.footer`
  color: #fff;
  text-decoration: none;
`

const Footer: React.FC = () => (
  <Container>
    <b>WANTED BOOKS</b>
    {`©${new Date().getFullYear()} Created by`}&nbsp;
    <a href="https://github.com/Shindongri" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </Container>
)

export default Footer
