import React from 'react'
import PropTypes from 'prop-types'
import { compose, withState, withHandlers, lifecycle } from 'recompose'

import Container from './Container'
import Header from './Header'
import Paragraph from './Paragraph'
import Logo from './Logo'
import FluTweet from './FluTweet'

import { fetchData } from 'api'

const propTypes = {
  onRefresh: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  error: PropTypes.bool,
}

const App = ({ data, error, onRefresh }) =>
  <Container>
    <Header>
      <Logo />
      <h2>Welcome to Flu Aware</h2>
    </Header>
    <Paragraph>Cultivate yourself via some tweets about flu!</Paragraph>
    <button onClick={onRefresh}>refresh</button>
    {error &&
      <div>
        <span>Oh noes!! Failed to refresh!! </span>
        <span role="img" aria-label="sad emoji">😢</span>
      </div>
    }
    <div>
      {data.map(({id, tweet_text}) =>
        <FluTweet key={id} >{tweet_text}</FluTweet>
      )}
    </div>
  </Container>

App.propTypes = propTypes

// Set up stateful data fetching
const enhance = compose(
  withState('data', 'setData', []),
  withState('error', 'setError', false),
  withHandlers({
    // Define immutable handler prop for data fetching
    onRefresh: ({ setData, setError }) => () => {
      // reset error state
      setError(false)
      // trigger data fetch
      fetchData().then(
        ({ error, data } = {}) =>
          error || !data
            ? setError(true)
            : setData(data)
      )
    },
  }),
  // Trigger data fetch on initial render
  lifecycle({
    componentWillMount() {
      this.props.onRefresh()
    },
  })
)

export default enhance(App)
