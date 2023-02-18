import { gql } from "@apollo/client";
import { useQuery } from "../../../config/apollo";

export const GET_HOME = gql`
  query Header {
    home(where: { id: "cle9yyxuy4uux0blxo3upjmy6" }) {
      header {
        websiteTitle
        navigation {
          id
          href
          label
        }
        logos {
          isActive
          image {
            url(
              transformation: {
                image: { resize: { width: 1280, height: 720 } }
              }
            )
          }
        }
      }
      backgroundImage {
        url(transformation: { image: { resize: { width: 1280, height: 720 } } })
      }
    }
  }
`;

export const GET_HEADER = gql`
  query Header {
    home(where: { id: "cle9yyxuy4uux0blxo3upjmy6" }) {
      header {
        websiteTitle
        navigation {
          id
          href
          label
        }
        logos {
          isActive
          image {
            url(
              transformation: {
                image: { resize: { width: 1280, height: 720 } }
              }
            )
          }
        }
      }
    }
  }
`;

export function useHome() {
  return useQuery(GET_HOME);
}

export function useHeader() {
  return useQuery(GET_HEADER);
}
