import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { Header, Navigation } from "../components/home/Header";
import { apolloClient } from "../config/apollo";
import { GET_HOME } from "../lib/graphql/queries/home";

export type PageContent = {
  home: {
    websiteTitle: string;
    headerNavigation: Navigation[];
    logo: {
      url: string;
    };
    backgroundImage: {
      url: string;
    };
  };
};

const Home: NextPage<PageContent> = ({ home }) => {
  console.log(home);
  return (
    <div className="relative h-screen w-screen">
      <Header logo={home.logo.url} navigation={home.headerNavigation} />

      <div className="relative w-full h-1/2 md:h-full md:absolute">
        <Image
          src={home.backgroundImage.url}
          alt="foto bruna e sostenes"
          fill
          className="object-cover -z-10"
        />
      </div>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Casagrande Fotografia
        </a>
      </footer> */}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query<PageContent>({
    query: GET_HOME,
  });

  console.log(data);

  if (!data) {
    return {
      props: {
        initialApolloState: apolloClient.cache.extract(),
      },
    };
  }

  return {
    props: {
      home: data.home,
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
