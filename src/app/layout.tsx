import "../styles/globals.css";

import { Inter } from "@next/font/google";
import { Header } from "../components/home/Header";
import { apolloClient } from "..//config/apollo";
import { GET_HOME } from "../lib/graphql/queries/home";
import { PageContent } from "../utils/types";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await apolloClient.query<PageContent>({ query: GET_HOME });

  const activeLogo = data.home.header.logos.find((logo) => logo.isActive);

  return (
    <html lang="pt-BR" className={inter.className}>
      <head />
      <body>
        <Header
          logo={activeLogo?.image.url as string}
          navigation={data.home.header.navigation}
        />

        {children}
      </body>
    </html>
  );
}
