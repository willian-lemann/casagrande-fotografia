import "../styles/globals.css";

import { Inter } from "@next/font/google";
import { Header } from "../components/Header";
import { apolloClient } from "..//config/apollo";
import { GET_HOME } from "../lib/graphql/queries/home";
import { PageContent } from "../utils/types";
import { Footer } from "../components/Footer";
import { FloatingButton } from "../components/FloatingButton";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const response = await apolloClient.query<PageContent>({ query: GET_HOME });

  const data = response?.data;

  const activeLogo = data.homePage.header.logos.find((logo) => logo.isActive);

  return (
    <html lang="pt-BR" className={inter.className}>
      <head />
      <body>
        <div className="">
          <Header
            logo={activeLogo?.image.url as string}
            navigation={data.homePage.header.navigation}
          />

          {children}

          <Footer />

          <FloatingButton />
        </div>
      </body>
    </html>
  );
}
