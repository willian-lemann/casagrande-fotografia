import { gql } from "@apollo/client";

export const GET_PORTIFOLIOS = gql`
  query MyQuery($where: PortifolioWhereInput = {}) {
    portifolios(where: $where) {
      id
      title
      date
      slug
      date
      type
      thumbnail {
        url(transformation: { image: { resize: { width: 1280, height: 720 } } })
      }
      photos {
        url
      }
    }
  }
`;

export const GET_PORTIFOLIO = gql`
  query MyQuery($where: PortifolioWhereUniqueInput = {}) {
    portifolio(where: $where) {
      id
      title
      date
      slug
      date
      type
      thumbnail {
        url(
          transformation: { image: { resize: { width: 2560, height: 1440 } } }
        )
      }
      photos {
        url
      }
    }
  }
`;
