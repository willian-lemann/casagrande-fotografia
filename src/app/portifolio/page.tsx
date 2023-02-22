import Image from "next/image";

export default function Portifolio() {
  return (
    <div className="container h-screen w-screen">
      <section className="relative h-[285px] bg-black/20 w-full flex items-center justify-center">
        <Image
          src="/images/bruna-e-sostenes.jpg"
          alt="imagem de fundo portifolio"
          fill
          className="object-cover -z-10"
        />

        <div className="text-center text-white">
          <h1 className="text-xl">Explore meu portifólio</h1>
          <p className="text-white/80">Conheça um pouco sobre as historias</p>
        </div>
      </section>

      <section className="px-8 mt-10">
        <h1 className="text-center text-xl text-zinc-700">
          Casamentos e Pré Weddings
        </h1>

        <ul>
         <li>
            
         </li>
        </ul>
      </section>
    </div>
  );
}
