import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Image
        src="/images/bruna-e-sostenes.jpg"
        alt="foto bruna e sostenes"
        fill
        className="object-cover"
      />
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"></main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Casagrande Fotografia
        </a>
      </footer>
    </div>
  );
};

export default Home;
