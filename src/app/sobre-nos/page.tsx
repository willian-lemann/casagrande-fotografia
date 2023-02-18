import Image from "next/image";
import { apolloClient } from "../../config/apollo";
import { GET_ABOUT } from "../../lib/graphql/queries/about";
import { AboutContent } from "../../utils/types";

export default async function SobreNos() {
  const { data } = await apolloClient.query<AboutContent>({ query: GET_ABOUT });

  return (
    <div className="h-screen w-screen">
      <header className="flex flex-col items-center h-full md:h-[calc(100vh-100px)] md:flex-row relative">
        <section className="bg-green-50 h-full w-full flex justify-center md:flex-1 md:items-center">
          <div className="mt-[6rem] md:mr-[8rem]">
            <strong className="inline-block text-center text-zinc-700 text-2xl md:text-4xl md:max-w-md md:text-start">
              {data.about.header}
            </strong>
          </div>
        </section>

        <div className="h-[200px] w-[150px] md:w-[300px] md:h-[400px] absolute top-1/2 -translate-y-1/2 md:-translate-x-1/2 md:left-1/2">
          <Image
            src={data.about.profileAvatar.url}
            alt="profile avatar image"
            fill
            className="object-cover rounded-md"
          />
        </div>

        <section className="h-full bg-green-100 flex items-center flex-col justify-end md:flex-1 md:justify-center">
          <div className="mb-4 max-w-sm text-center md:ml-[8rem]">
            <strong className="text-zinc-700 text-lg pt-20">
              {data.about.subheader}
            </strong>

            <p className="text-zinc-500 px-4 mt-2 md:mt-10 text-start">
              {data.about.briefDescription}.
            </p>
          </div>
        </section>
      </header>
    </div>
  );
}
