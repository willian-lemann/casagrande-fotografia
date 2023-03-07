import { apolloClient } from "../../config/apollo";
import { GET_PORTIFOLIOS } from "../../lib/graphql/queries/portifolio";
import { Portifolio } from "../../utils/types";
import { PortifolioList } from "./PortifolioList";

export async function Portifolios() {
  const {
    data: { portifolios },
  } = await apolloClient.query({
    query: GET_PORTIFOLIOS,
    fetchPolicy: "no-cache",
  });

  return (
    <div className="container">
      <section className="px-8 md:px-0">
        <PortifolioList portifolio={portifolios} />
      </section>
    </div>
  );
}
