import { apolloClient } from "../../config/apollo";
import { GET_ORCAMENTO } from "../../lib/graphql/queries/orcamento";
import { OrcamentoContent } from "../../utils/types";

export default async function Orcamento() {
  const { data } = await apolloClient.query<OrcamentoContent>({
    query: GET_ORCAMENTO,
  });

  return (
    <div className="container h-screen flex justify-center">
      <iframe
        className="scale-100 h-full w-[300px] md:w-[800px]"
        src={`${data.orcamento.file.url}#toolbar=0`}
      />
    </div>
  );
}
