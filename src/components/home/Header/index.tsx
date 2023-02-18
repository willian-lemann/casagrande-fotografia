import Image from "next/image";
import { useHeader } from "../../../lib/graphql/queries/home";
import { Navigation } from "../../../utils/types";
import { MenuMobile } from "./MenuMobile";

import { NavigationItem } from "./NavigationItem";

type HeaderProps = {
  navigation: Navigation[];
  logo: string;
};

export function Header({ navigation, logo }: HeaderProps) {
  return (
    <header className="px-8 w-full h-[300px] md:h-[140px] md:flex md:items-center md:justify-between md:bg-zinc-900/20 md:absolute z-20">
      <section className="h-full">
        <div className="w-full h-full md:w-[300px] md:h-full relative">
          <Image
            src={logo}
            fill
            alt="logo casagrande fotografia"
            className="hidden md:block object-contain w-full h-full"
          />

          <Image
            src={logo}
            fill
            alt="logo casagrande fotografia"
            className="md:hidden object-contain w-full h-full"
          />
        </div>
      </section>

      <nav className="hidden text-white md:block md:mr-20">
        <ul className="flex items-center gap-4">
          {navigation.map((item) => (
            <NavigationItem
              key={item.label}
              href={item.href}
              label={item.label}
            />
          ))}
        </ul>
      </nav>

      <MenuMobile navigation={navigation} />
    </header>
  );
}
