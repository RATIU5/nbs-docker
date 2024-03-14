"use client";
import Image from "next/image";
import { IconBag, IconClose, IconMenu } from "./icons";
import React from "react";
import { cn } from "~/lib/utils";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <header>
      <div className="flex w-full justify-between sticky items-center px-6 py-5 shadow-md z-20 bg-white">
        <button
          className="block xl:hidden"
          onClick={() =>
            setMenuOpen((prev) => {
              return !prev;
            })
          }
        >
          {(menuOpen && <IconClose />) || <IconMenu />}
        </button>
        <Image
          unoptimized
          src="https://cdn11.bigcommerce.com/s-g5ubotok03/images/stencil/250x100/linenspa-logo_1675987042__61448.original.png"
          alt="Linenspa"
          width="250"
          height="100"
          className="w-40"
        />
        <nav className="hidden xl:flex">
          <ul className="gap-8 font-mont font-light text-neutral-800 flex">
            <li>
              <a
                className="hover:text-neutral-500 active:text-neutral-500"
                href="/mattresses"
              >
                Mattresses
              </a>
            </li>
            <li>
              <a
                className="hover:text-neutral-500 active:text-neutral-500"
                href="#"
              >
                Toppers
              </a>
            </li>
            <li>
              <a
                className="hover:text-neutral-500 active:text-neutral-500"
                href="/bedding"
              >
                Bedding
              </a>
            </li>
            <li>
              <a
                className="hover:text-neutral-500 active:text-neutral-500"
                href="/pillows"
              >
                Pillows
              </a>
            </li>
            <li>
              <a
                className="hover:text-neutral-500 active:text-neutral-500"
                href="/bed-frames"
              >
                Bed Frames
              </a>
            </li>
            <li>
              <a
                className="hover:text-neutral-500 active:text-neutral-500"
                href="/protectors"
              >
                Protectors
              </a>
            </li>
            <li>
              <a
                className="hover:text-neutral-500 active:text-neutral-500"
                href="/accessories"
              >
                Accessories
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-4 font-semibold text-neutral-800">
          <button className="hidden hover:text-neutral-500 active:text-neutral-500 xl:block">
            Search
          </button>
          <button className="flex gap-2 hover:text-neutral-500">
            <span className="hidden xl:block">Cart</span> <IconBag />
          </button>
        </div>
      </div>
      <div
        className={cn(
          "left-0 p-8 bg-neutral-200 absolute w-full xl:hidden z-0 shadow-md -translate-y-[150%] transition-all ease-in-out duration-200",
          {
            "translate-y-0": menuOpen,
          }
        )}
      >
        <input
          type="text"
          placeholder="Search the store"
          className="w-full p-3 border-2 border-solid border-neutral-100 mb-8 shadow-sm active:border-neutral-500 focus:border-neutral-500"
        />
        <ul className="gap-8 font-mont font-light text-neutral-800 flex flex-col">
          <li>
            <a
              className="hover:text-neutral-500 active:text-neutral-500"
              href="/mattresses"
            >
              Mattresses
            </a>
          </li>
          <li>
            <a
              className="hover:text-neutral-500 active:text-neutral-500"
              href="/toppers"
            >
              Toppers
            </a>
          </li>
          <li>
            <a
              className="hover:text-neutral-500 active:text-neutral-500"
              href="/bedding"
            >
              Bedding
            </a>
          </li>
          <li>
            <a
              className="hover:text-neutral-500 active:text-neutral-500"
              href="/pillows"
            >
              Pillows
            </a>
          </li>
          <li>
            <a
              className="hover:text-neutral-500 active:text-neutral-500"
              href="/bed-frames"
            >
              Bed Frames
            </a>
          </li>
          <li>
            <a
              className="hover:text-neutral-500 active:text-neutral-500"
              href="/protectors"
            >
              Protectors
            </a>
          </li>
          <li>
            <a
              className="hover:text-neutral-500 active:text-neutral-500"
              href="/accessories"
            >
              Accessories
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
