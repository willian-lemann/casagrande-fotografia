import { gql } from "@apollo/client";
import { useQuery } from "../../../config/apollo";

export const GET_ORCAMENTO = gql`
  query MyOrcamento {
    orcamento(where: { id: "clefryngd00q30blv3boqpwbs" }) {
      file {
        url
      }
    }
  }
`;

export function useOrcamento<T>() {
  return useQuery<T>(GET_ORCAMENTO);
}
