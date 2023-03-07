import Image from "next/image";

export default function Home() {
  return (
    <div className="isolate bg-white">
      <main className="relative md:bg-black/20 w-full h-[calc(100vh-72px)]">
        <Image
          src="/images/bruna-e-sostenes.jpg"
          alt="foto bruna e sostenes"
          fill
          className="object-cover -z-10"
        />

        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48">
            <div className="text-center hidden md:inline-block">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Conte sua história em cada Fotografia.
              </h1>
              <p className="mt-6 text-lg leading-8 text-white">
                Capturando momentos inesquecíveis de amor, para que possam ser
                revividos para sempre.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="text-base font-semibold leading-7 text-white bg-primary rounded-full px-4 py-2"
                >
                  Portifólio <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
