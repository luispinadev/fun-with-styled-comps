import v4 from 'uuid/v4'
import sampleSize from 'lodash/fp/sampleSize'

import SAMPLE_DATA from './data.json'
// Data from http://api.flutrack.org/?s=feverANDcoughORfever

/*
  In reality we would use something closer to this:

  const HOST_URL = 'http://localhost:3000'

  export const fetchData = () =>
    fetch(`${HOST_URL}/api`, { mode: 'cors' })
      .then(response => response && response.ok
        ? ({ data: response.json() })
        : Promise.reject(response)
      )
      .catch(error => ({ error }))
*/

// gnerate some unique IDs
const DATA_WITH_IDS = SAMPLE_DATA.map(item => ({ ...item, id: v4() }))

// Return a random sample of the dummy data
export const fetchData = ({ forceFail = false, size = 5 } = {}) =>
  (forceFail
    ? Promise.reject('Forced fail')
    : Promise.resolve(sampleSize(size, DATA_WITH_IDS))
  )
  .then(result => ({ data: result }))
  .catch(error => ({ error }))
