// TODO:
// Ex from https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md#using-javascript-to-our-advantage
// check link for even more advanced examples
/*
export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}
*/

// Usage:
/*
import { truncate } from '../style-utils';

// Make this div truncate the text with an ellipsis
const Box = styled.div`
  ${ truncate('250px') }
  background: papayawhip;
`;
*/
