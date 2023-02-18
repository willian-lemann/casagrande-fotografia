"use client";

import { useState } from "react";

import Link from "next/link";
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
} from "@heroicons/react/24/solid";

import { classNames } from "../../../utils/classNames";
import { Navigation } from "../../../utils/types";

type MenuMobileProps = {
  navigation: Navigation[];
};

export function MenuMobile({ navigation }: MenuMobileProps) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <>
      <div className="md:hidden">
        <MenuIcon
          className={classNames(
            isMenuVisible ? "hidden animate-fadeOut" : "block",
            "animate-fadeIn text-black w-10 h-10 absolute top-10 right-10"
          )}
          onClick={() => setIsMenuVisible(true)}
        />
      </div>

      <nav
        className={classNames(
          isMenuVisible ? "w-full" : "-translate-x-full",
          "transition-all duration-300 text-zinc-800 bg-green-50 absolute h-full left-0 z-50 shadow-lg top-0"
        )}
      >
        <XIcon
          className={classNames(
            isMenuVisible ? "block" : "hidden animate-fadeOut",
            "animate-fadeIn text-black w-10 h-10 absolute top-10 right-10"
          )}
          onClick={() => setIsMenuVisible(false)}
        />
        <ul className="w-full h-full p-8 md:hidden">
          {navigation.map((navigationItem) => (
            <li
              key={navigationItem.label}
              className="p-4 text-2xl mb-4 last:mb-0 hover:bg-zinc-700 active:bg-zinc-900 rounded-md transition-colors duration-300"
            >
              <Link key={navigationItem.label} href={navigationItem.href}>
                {navigationItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
