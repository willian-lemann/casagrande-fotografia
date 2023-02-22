import Image from "next/image";
import { apolloClient } from "../../config/apollo";
import { getPortifolioDate } from "../../functions/get-portifolio-date";
import { getPortifolioType, Type } from "../../functions/get-portifolio-type";
import { GET_PORTIFOLIO } from "../../lib/graphql/queries/portifolio";
import { PortifolioContent } from "../../utils/types";

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
        <h1 className="text-center text-xl text-zinc-700 my-10">
          Casamentos e Pré Weddings
        </h1>

        <ul className="md:grid md:grid-cols-3 md:gap-10">
          {data.portifolio.portifolio.map((portifolioItem) => (
            <>
              <li
                key={portifolioItem.id}
                className="group cursor-pointer mb-8 last:mb-0"
              >
                <div className="relative h-[250px] w-full rounded-md bg-black/20 group-hover:bg-transparent overflow-hidden transition-colors duration-300">
                  <Image
                    src={portifolioItem.thumbnail.url}
                    fill
                    alt="thumbnail portifolio"
                    className="object-cover rounded-md -z-10 group-hover:scale-105  transition-all duration-300"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="">{portifolioItem.title}</h3>

                  <div className="pt-4 text-zinc-500">
                    <p>{getPortifolioType(portifolioItem.type as Type)}</p>
                    <p>{getPortifolioDate(portifolioItem.date)}</p>
                  </div>
                </div>
              </li>
              <li
                key={portifolioItem.id}
                className="group cursor-pointer mb-8 last:mb-0"
              >
                <div className="relative h-[250px] w-full rounded-md bg-black/20 group-hover:bg-transparent overflow-hidden transition-colors duration-300">
                  <Image
                    src={portifolioItem.thumbnail.url}
                    fill
                    alt="thumbnail portifolio"
                    className="object-cover rounded-md -z-10 group-hover:scale-105  transition-all duration-300"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="">{portifolioItem.title}</h3>

                  <div className="pt-4 text-zinc-500">
                    <p>{getPortifolioType(portifolioItem.type as Type)}</p>
                    <p>{getPortifolioDate(portifolioItem.date)}</p>
                  </div>
                </div>
              </li>
              <li
                key={portifolioItem.id}
                className="group cursor-pointer mb-8 last:mb-0"
              >
                <div className="relative h-[250px] w-full rounded-md bg-black/20 group-hover:bg-transparent overflow-hidden transition-colors duration-300">
                  <Image
                    src={portifolioItem.thumbnail.url}
                    fill
                    alt="thumbnail portifolio"
                    className="object-cover rounded-md -z-10 group-hover:scale-105  transition-all duration-300"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="">{portifolioItem.title}</h3>

                  <div className="pt-4 text-zinc-500">
                    <p>{getPortifolioType(portifolioItem.type as Type)}</p>
                    <p>{getPortifolioDate(portifolioItem.date)}</p>
                  </div>
                </div>
              </li>
              <li
                key={portifolioItem.id}
                className="group cursor-pointer mb-8 last:mb-0"
              >
                <div className="relative h-[250px] w-full rounded-md bg-black/20 group-hover:bg-transparent overflow-hidden transition-colors duration-300">
                  <Image
                    src={portifolioItem.thumbnail.url}
                    fill
                    alt="thumbnail portifolio"
                    className="object-cover rounded-md -z-10 group-hover:scale-105  transition-all duration-300"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="">{portifolioItem.title}</h3>

                  <div className="pt-4 text-zinc-500">
                    <p>{getPortifolioType(portifolioItem.type as Type)}</p>
                    <p>{getPortifolioDate(portifolioItem.date)}</p>
                  </div>
                </div>
              </li>
            </>
          ))}
        </ul>
      </section>
    </div>
  );
}
