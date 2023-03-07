import { usePathname } from "next/navigation";
import { NextPageContext } from "next";
import { apolloClient } from "../../../config/apollo";
import { Portifolio, PortifolioContent } from "../../../utils/types";
import {
  GET_PORTIFOLIO,
  GET_PORTIFOLIOS,
} from "../../../lib/graphql/queries/portifolio";
import Image from "next/image";
import { getPortifolioDate } from "../../../functions/get-portifolio-date";

type PortifolioDetailsProps = {
  params: { slug: string };
};

export default async function PortifolioDetails({
  params,
}: PortifolioDetailsProps) {
  const { slug } = params;

  const { data } = await apolloClient.query<{ portifolio: Portifolio }>({
    query: GET_PORTIFOLIO,
    variables: {
      where: {
        slug,
      },
    },
  });

  return (
    <div className="container">
      <div className="my-20 mx-auto flex flex-col items-center gap-2">
        <h1 className="text-2xl text-zinc-700">{data.portifolio.title}</h1>
        <p>{getPortifolioDate(data.portifolio.date)}</p>
      </div>

      <div className="relative h-screen">
        <Image
          src={data.portifolio.thumbnail.url}
          alt="background image"
          className="object-cover"
          fill
        />
      </div>

      <ul className="md:mt-20 md:grid grid-cols-[auto] grid-flow-row-dense gap-4">
        {data.portifolio.photos.map((photo) => (
          <li
            key={photo.url}
            className="relative w-full h-[800px] md:odd:col-span-2 md:even:row-span-2"
          >
            <Image
              src={photo.url}
              alt={`foto de ${data.portifolio.title}`}
              fill
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
