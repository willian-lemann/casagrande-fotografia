import { Tab } from "@headlessui/react";
import Image from "next/image";
import { apolloClient } from "../../config/apollo";
import { getPortifolioDate } from "../../functions/get-portifolio-date";
import { getPortifolioType, Type } from "../../functions/get-portifolio-type";
import { GET_PORTIFOLIO } from "../../lib/graphql/queries/portifolio";
import { PortifolioContent } from "../../utils/types";
import { PortifolioList } from "./PortifolioList";

export default async function Portifolio() {
  const { data } = await apolloClient.query<PortifolioContent>({
    query: GET_PORTIFOLIO,
  });

  return (
    <div className="container w-screen">
      <section className="relative h-[285px] bg-black/20 w-full flex items-center justify-center">
        <Image
          src={data.portifolio.backgroundImage.url}
          alt="imagem de fundo portifolio"
          fill
          className="object-cover -z-10"
        />

        <div className="text-center text-white">
          <h1 className="text-xl">{data.portifolio.title}</h1>
          <p className="text-white/80">{data.portifolio.subtitle}</p>
        </div>
      </section>

      <section className="px-8 md:px-0">
        <PortifolioList portifolio={data.portifolio.portifolio} />
      </section>
    </div>
  );
}
