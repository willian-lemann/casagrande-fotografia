"use client";

import { Instagram } from "lucide-react";
import { PinterestIcon } from "./PinterestIcon";

export function Footer() {
  function handleOpenInstagram() {
    window.open("https://www.instagram.com/casagrande_fotografia/", "_blank");
  }

  function handleOpenPinterest() {
    window.open(
      "https://br.pinterest.com/casagrande_fotografia/?eq=casagrande%20foto&etslf=15109",
      "_blank"
    );
  }

  return (
    <footer className="container flex items-center justify-between px-8 py-10">
      <div className="w-full flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <Instagram
            className="h-6 w-6 cursor-pointer"
            onClick={handleOpenInstagram}
          />
          <div className="h-6 w-6 cursor-pointer" onClick={handleOpenPinterest}>
            <PinterestIcon />
          </div>
        </div>

        <section className="">
          <span>© 2023 Casagrande Fotografia</span>
        </section>
      </div>
    </footer>
  );
}
