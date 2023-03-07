"use client";
import { useMemo } from "react";
import { useRouter } from "next/navigation";

import { Tab } from "@headlessui/react";
import Image from "next/image";
import { getPortifolioDate } from "../../functions/get-portifolio-date";
import { getPortifolioType, Type } from "../../functions/get-portifolio-type";
import { Portifolio, PortifolioContent } from "../../utils/types";
import { classNames } from "../../utils/classNames";

type PortifolioListProps = {
  portifolio: Portifolio[];
};

export function PortifolioList({ portifolio }: PortifolioListProps) {
  const router = useRouter();

  const preweddings = useMemo(
    () => portifolio.filter((item) => item.type === "prewedding"),
    []
  );

  const weddings = useMemo(
    () => portifolio.filter((item) => item.type === "wedding"),
    []
  );

  function handleGoDetails(slug: string) {
    router.push(`/portifolio/${slug}`);
  }

  return (
    <Tab.Group>
      <Tab.List>
        <div className="my-10 flex gap-4 justify-center">
          <Tab className="outline-none">
            {({ selected }) => (
              <h1
                className={classNames(
                  selected ? "border-zinc-800" : "border-transparent",
                  "text-lg border-b-2 transition-all duration-300"
                )}
              >
                Casamentos
              </h1>
            )}
          </Tab>
          <Tab className="outline-none">
            {({ selected }) => (
              <h1
                className={classNames(
                  selected ? "border-zinc-800" : "border-transparent",
                  "text-lg border-b-2 transition-all duration-300"
                )}
              >
                Pré Weddings
              </h1>
            )}
          </Tab>
        </div>
      </Tab.List>

      <Tab.Panels>
        <Tab.Panel>
          <ul className="md:grid md:grid-cols-3 md:gap-10">
            {weddings.map((portifolioItem) => (
              <li
                key={portifolioItem.id}
                className="group cursor-pointer mb-8 last:mb-0 animate-fadeIn"
                onClick={() => handleGoDetails(portifolioItem.slug)}
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
            ))}
          </ul>
        </Tab.Panel>

        <Tab.Panel>
          <ul className="md:grid md:grid-cols-3 md:gap-10">
            {preweddings.map((portifolioItem) => (
              <li
                key={portifolioItem.id}
                className="group cursor-pointer mb-8 last:mb-0 animate-fadeIn"
                onClick={() => handleGoDetails(portifolioItem.slug)}
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
            ))}
          </ul>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
