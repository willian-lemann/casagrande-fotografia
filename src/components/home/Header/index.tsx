import Image from "next/image";
import { MenuMobile } from "./MenuMobile";

import data from "../data.json";
import Link from "next/link";
import { NavigationItem } from "./NavigationItem";

export function Header() {
  return (
    <header className="px-8 w-full h-[300px] md:h-[140px] md:flex md:items-center md:justify-between md:bg-zinc-900/20 md:absolute z-20">
      <section className="h-full">
        <div className="w-full h-full md:w-[300px] md:h-full relative">
          <Image
            src="/images/logo-horizontal.png"
            fill
            alt="logo casagrande fotografia"
            className="object-contain w-full h-full"
          />
        </div>
      </section>

      <nav className="hidden text-white md:block md:mr-20">
        <ul className="flex items-center gap-4">
          {data.navigation.map((item) => (
            <NavigationItem
              key={item.label}
              href={item.href}
              label={item.label}
            />
          ))}
        </ul>
      </nav>

      <MenuMobile />
    </header>
  );
}
