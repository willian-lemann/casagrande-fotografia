import Image from "next/image";
import { MenuMobile } from "./MenuMobile";

import data from "../data.json";
import Link from "next/link";
import { NavigationItem } from "./NavigationItem";

export function Header() {
  return (
    <header className="px-8 w-full h-[300px] md:h-[150px] md:flex md:items-center md:justify-center md:absolute z-20 md:bg-white/40  md:overflow-clip">
      <nav className="hidden text-white md:block">
        <ul className="flex items-center gap-4">
          {data.navigation.left.map((item) => (
            <NavigationItem
              key={item.label}
              href={item.href}
              label={item.label}
            />
          ))}
        </ul>
      </nav>

      <div className="w-full h-full md:w-[400px] md:h-full relative">
        <Image
          src="/images/logo-horizontal-dark.png"
          fill
          alt="logo casagrande fotografia"
          className="object-contain w-full h-full"
        />
      </div>

      <nav className="hidden text-white md:block">
        <ul className="flex items-center gap-4">
          {data.navigation.right.map((item) => (
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
