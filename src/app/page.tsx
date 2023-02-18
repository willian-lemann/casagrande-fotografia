import type {} from "next";
import Image from "next/image";

import { apolloClient } from "../config/apollo";
import { GET_HOME } from "../lib/graphql/queries/home";
import { PageContent } from "../utils/types";

export default async function Home() {
  const { data } = await apolloClient.query<PageContent>({
    query: GET_HOME,
  });

  return (
    <div className="relative h-screen w-screen">
      <div className="relative w-full h-1/2 md:h-full md:absolute">
        <Image
          src={data.home.backgroundImage.url}
          alt="foto bruna e sostenes"
          fill
          className="object-cover -z-10"
        />
      </div>
    </div>
  );
}
