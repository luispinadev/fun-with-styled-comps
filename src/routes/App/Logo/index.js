import styled from 'styled-components'

import logo from 'assets/logo.svg'
import { rotate360 } from 'shared/animations'

const Logo = styled.img.attrs({ src: logo })`
  animation: ${rotate360} infinite 20s linear;
  height: 80px;
`

export default Logo
