import React from 'react'

import Container from './Container'
import Header from './Header'
import Intro from './Intro'
import Logo from './Logo'

import { fetchData } from 'api'

fetchData()
  .then(
    ({ data }) => console.log(data)
  )

fetchData({ forceFail: true })
  .then(
    ({ error }) => console.log(error)
  )


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
