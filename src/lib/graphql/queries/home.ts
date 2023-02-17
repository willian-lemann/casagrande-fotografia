import { gql, useQuery } from "@apollo/client";

export const GET_HOME = gql`
  query HomeQuery {
    home(where: { id: "cle8o9ugu2w5y0blxglj9mhwh" }) {
      websiteTitle
      headerNavigation {
        id
        href
        label
      }
      logo {
        url(transformation: { image: { resize: { width: 1280, height: 720 } } })
      }
      backgroundImage {
        url(
          transformation: { image: { resize: { width: 1920, height: 1080 } } }
        )
      }
    }
  }
`;

export function useHome() {
  return useQuery(GET_HOME);
}
