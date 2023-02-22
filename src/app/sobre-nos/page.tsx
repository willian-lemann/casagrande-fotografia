import Image from "next/image";
import { apolloClient } from "../../config/apollo";
import { GET_ABOUT } from "../../lib/graphql/queries/about";
import { AboutContent } from "../../utils/types";

export default async function SobreNos() {
  const { data } = await apolloClient.query<AboutContent>({ query: GET_ABOUT });

  return (
    <>
      <header className="flex flex-col items-center h-[calc(100vh-65px)] md:h-[calc(100vh-128px)] md:flex-row relative">
        <section className="bg-primary h-full w-full flex justify-center md:flex-1 md:items-center">
          <div className="mt-[6rem] md:mr-[8rem]">
            <strong className="inline-block text-center px-8 md:px-0 text-zinc-700 text-2xl md:text-4xl md:max-w-md md:text-start">
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

        <section className="px-8 h-full w-full flex items-center flex-col justify-end md:justify-center md:flex-1">
          <div className="max-w-sm text-center md:ml-[8rem]">
            <strong className="text-zinc-700 text-lg mt-20">
              {data.about.subheader}
            </strong>

            <p
              className="text-zinc-500 mt-2 md:mt-10 text-start"
              dangerouslySetInnerHTML={{ __html: data.about.briefDescription }}
            />
          </div>
        </section>
      </header>

      <div className="w-full px-8">
        <article className="pt-20">
          <strong className="text-center">{data.about.photosHeader}</strong>
        </article>

        <ul className="mt-10 w-full md:grid md:grid-cols-3 md:gap-8">
          {data.about.photos.map((photo) => (
            <>
              <li
                key={photo.url}
                className="relative w-full h-[440px] md:h-[700px] mb-4 md:mb-0 last:mb-0 rounded-md"
              >
                <Image
                  fill
                  src={photo.url}
                  alt="imagem do victor"
                  className="object-cover rounded-md"
                />
              </li>
              <li
                key={photo.url}
                className="relative w-full h-[440px] md:h-[700px] mb-4 md:mb-0 last:mb-0 rounded-md"
              >
                <Image
                  fill
                  src={photo.url}
                  alt="imagem do victor"
                  className="object-cover rounded-md"
                />
              </li>
              <li
                key={photo.url}
                className="relative w-full h-[440px] md:h-[700px] mb-4 md:mb-0 last:mb-0 rounded-md"
              >
                <Image
                  fill
                  src={photo.url}
                  alt="imagem do victor"
                  className="object-cover rounded-md"
                />
              </li>
              <li
                key={photo.url}
                className="relative w-full h-[440px] md:h-[700px] mb-4 md:mb-0 last:mb-0 rounded-md"
              >
                <Image
                  fill
                  src={photo.url}
                  alt="imagem do victor"
                  className="object-cover rounded-md"
                />
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
}
