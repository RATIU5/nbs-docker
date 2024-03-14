import Image from "next/image";
import { IconBag } from "./icons";

export default function Header() {
  return (
    <header>
      <div className="flex w-full justify-between items-center px-6 py-5 shadow-md">
        <Image
          src="https://cdn11.bigcommerce.com/s-g5ubotok03/images/stencil/250x100/linenspa-logo_1675987042__61448.original.png"
          alt="Linenspa"
          width="192"
          height="30"
          className="w-48"
        />
        <nav>
          <ul className="gap-8 font-mont font-light text-neutral-800 hidden xl:flex">
            <li>
              <a className="hover:text-neutral-500" href="#">
                Mattresses
              </a>
            </li>
            <li>
              <a className="hover:text-neutral-500" href="#">
                Toppers
              </a>
            </li>
            <li>
              <a className="hover:text-neutral-500" href="#">
                Bedding
              </a>
            </li>
            <li>
              <a className="hover:text-neutral-500" href="#">
                Pillows
              </a>
            </li>
            <li>
              <a className="hover:text-neutral-500" href="#">
                Bed Frames
              </a>
            </li>
            <li>
              <a className="hover:text-neutral-500" href="#">
                Protectors
              </a>
            </li>
            <li>
              <a className="hover:text-neutral-500" href="#">
                Accessories
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-4 font-semibold text-neutral-800">
          <button>Search</button>
          <button className="flex gap-2 hover:text-neutral-500">
            <span>Cart</span> <IconBag />
          </button>
        </div>
      </div>
      <div></div>
    </header>
  );
}
