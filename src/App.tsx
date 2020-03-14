import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { reset } from 'styled-reset'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules'
import rootSaga from './sagas'
import IndexPage from './containers/IndexPage'

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    background-color: #2a2d2e;
  }
`

const MainContainer = styled.main`
  max-width: 1100px;
  margin: 0 auto;
`

const sagaMiddleware = createSagaMiddleware()

const enhancer =
  process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(sagaMiddleware))
    : composeWithDevTools(applyMiddleware(sagaMiddleware))

const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga)

const App = () => (
  <Provider store={store}>
    <MainContainer>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IndexPage} />
        </Switch>
      </BrowserRouter>
      <GlobalStyle />
    </MainContainer>
  </Provider>
)

export default App
