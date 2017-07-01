import React from 'react'

import Container from './Container'
import Header from './Header'
import Intro from './Intro'
import Logo from './Logo'

const App = () =>
  <Container>
    <Header>
      <Logo />
      <h2>Welcome to React</h2>
    </Header>
    <Intro>
      To get started, edit <code>src/App.js</code> and save to reload.
    </Intro>
  </Container>

export default App
