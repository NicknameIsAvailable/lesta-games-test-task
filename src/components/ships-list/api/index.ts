import {gql} from '@apollo/client';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const GET_GLOSSARY = gql`
    {
  vehicles {
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
      title
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
}
`

export default GET_GLOSSARY;