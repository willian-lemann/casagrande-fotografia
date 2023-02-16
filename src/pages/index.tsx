import type { NextPage } from "next";
import Image from "next/image";
import { Header } from "../components/home/Header";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen w-screen">
      <Header />

      <div className="relative w-full h-1/2 md:h-full md:absolute">
        <Image
          src="/images/bruna-e-sostenes.jpg"
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
