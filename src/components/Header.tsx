import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  align-items: flex-end;
  small {
    font-size: 10px;
    margin-left: 4px;
    color: #fff;
    font-weight: bold;
  }
`

const Header: React.FC = () => {
  return (
    <Container>
      <img
        src="https://s3.ap-northeast-2.amazonaws.com/static.wanted.co.kr/images/logo_wanted.png"
        width={100}
        alt=""
      />
      <small>books</small>
    </Container>
  )
}

export default Header
