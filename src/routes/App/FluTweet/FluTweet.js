import styled from 'styled-components'

import { truncate } from 'shared/style-utils'

// Make this div truncate the text with an ellipsis
const FluTweet = styled.div`
  ${ truncate('550px') }
  background: papayawhip;
  padding: 10px 4px;
`;

export default FluTweet
