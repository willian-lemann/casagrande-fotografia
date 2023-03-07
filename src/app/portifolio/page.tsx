import Image from "next/image";
import { apolloClient } from "../../config/apollo";

import { GET_PORTIFOLIO_PAGE } from "../../lib/graphql/queries/portifolio-page";
import { PortifolioContent } from "../../utils/types";

import { Portifolios } from "./Portifolios";

export default async function PortifolioPage() {
  const {
    data: { portifolioPage },
  } = await apolloClient.query<PortifolioContent>({
    query: GET_PORTIFOLIO_PAGE,
    fetchPolicy: "no-cache",
  });

  return (
    <div className="">
      <div className="relative h-[calc(100vh-72px)] w-full flex items-center justify-center">
        <Image
          src={portifolioPage.backgroundImage.url}
          alt="imagem de fundo portifolio"
          fill
          className="object-cover -z-10"
          priority
        />

        <div className="text-center text-white">
          <h1 className="text-xl">{portifolioPage.title}</h1>
          <p>{portifolioPage.subtitle}</p>
        </div>
      </div>

      {/* @ts-expect-error */}
      <Portifolios />
    </div>
  );
}
