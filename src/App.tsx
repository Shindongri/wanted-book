import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import IndexPage from './containers/IndexPage'

const GlobalStyle = createGlobalStyle`
  html, body {

  }
`

const MainContainer = styled.main``

const App = () => (
  <MainContainer>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ IndexPage } />
      </Switch>
    </BrowserRouter>
    <GlobalStyle />
  </MainContainer>)

export default App
