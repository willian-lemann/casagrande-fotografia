import { gql } from "@apollo/client";
import { useQuery } from "../../../config/apollo";

export const GET_PORTIFOLIO_PAGE = gql`
  query MyPortifolio {
    portifolioPage(where: { id: "clert017p3dbk0bluybml8f0e" }) {
      title
      subtitle
      backgroundImage {
        url(
          transformation: { image: { resize: { width: 1920, height: 1080 } } }
        )
      }
    }
  }
`;
