import { Instagram, ArrowUp } from "lucide-react";
import { PinterestIcon } from "./PinterestIcon";

export function Footer() {
  return (
    <footer className="container flex items-center justify-between px-8 py-10">
      <div className="w-full flex flex-col items-center gap-4">
        <div className="flex items-center gap-4">
          <Instagram className="h-6 w-6 cursor-pointer" />
          <div className="h-6 w-6 cursor-pointer">
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
