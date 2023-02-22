"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import Link from "next/link";
import { Fragment, useState } from "react";

import { Navigation } from "../../utils/types";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";

type HeaderProps = {
  navigation: Navigation[];
  logo: string;
};

export function Header({ navigation, logo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="container px-6 py-6 lg:px-8">
      <nav className="flex items-center justify-between" aria-label="Global">
        <div className="flex lg:flex-1">
          <div className="relative w-52 h-20">
            <Image
              src={logo}
              alt="logo casagrande fotografia"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Mobile  */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-normal leading-6 text-gray-900"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end" />
      </nav>

      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <Transition
          as={Fragment}
          appear
          show={mobileMenuOpen}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <div className="relative w-52 h-20">
                <Image
                  className="object-cover"
                  src={logo}
                  alt="logo casagrande fotofrafia"
                  fill
                />
              </div>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      onClick={() => setMobileMenuOpen(false)}
                      key={item.label}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Transition>
      </Dialog>
    </div>
  );
}
