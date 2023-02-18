import { gql } from "@apollo/client";
import { useQuery } from "../../../config/apollo";

export const GET_ABOUT = gql`
  query About {
    about(where: { id: "clea1h7rr4wz40blxre6kh2c7" }) {
      header
      subheader
      briefDescription
      profileAvatar {
        url(transformation: { image: { resize: { width: 1280, height: 720 } } })
      }
    }
  }
`;

export function useAbout() {
  return useQuery(GET_ABOUT);
}
