import data from './data.json'
/*
  Dummy API
*/

/*
  In reality we would use something like this:

  const HOST_URL = 'http://localhost:3000'

  export const fetchData = () =>
    fetch(`${HOST_URL}/api`, { mode: 'cors' })
      .then(response => response && response.ok
        ? ({ data: response.json() })
        : Promise.reject(response)
      )
      .catch(error => ({ error }))
*/

// Data from http://api.flutrack.org/?s=feverANDcoughORfever
export const fetchData = ({ forceFail = false } = {}) =>
  (forceFail ? Promise.reject('Forced fail') : Promise.resolve(data))
    .then( data => ({ data }) )
    .catch( error => ({ error }) )
