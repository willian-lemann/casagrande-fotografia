import { gql } from "@apollo/client";
import { useQuery } from "../../../config/apollo";

export const GET_PORTIFOLIO = gql`
  query MyPortifolio {
    portifolio(where: { id: "clefpmxj4b0070blrhjlld0vx" }) {
      title
      subtitle
      backgroundImage {
        url(
          transformation: { image: { resize: { width: 1920, height: 1080 } } }
        )
      }
      portifolio {
        id
        title
        date
        type
        thumbnail {
          url(
            transformation: { image: { resize: { width: 1280, height: 720 } } }
          )
        }
      }
    }
  }
`;

export function usePortifolio<T>() {
  return useQuery<T>(GET_PORTIFOLIO);
}
