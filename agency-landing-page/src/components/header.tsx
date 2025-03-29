import { useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./logo";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Projects",
      href: "#projects",
    },
  ];

  return (
    <header className="fixed backdrop-blur-3xl py-4 px-6 w-full flex items-center justify-between z-50 md:py-6 md:px-12">
      <Logo />
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 min-h-dvh"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <nav
        className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-200 ease-in-out z-50 md:relative md:top-0 md:w-auto md:flex md:items-center md:gap-8 ${
          isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-6 px-6 min-h-dvh md:min-h-0 md:flex-row md:items-center md:p-0 md:bg-transparent md:text-white bg-white lg:bg-transparent">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="py-3.5 border-b-[1px] border-white/30 w-full flex justify-end md:hidden"
          >
            <CloseIcon />
          </button>
          {links.map((link) => (
            <li onClick={() => setIsOpen(!isOpen)}>
              <a
                href={link.href}
                className="hover:underline text-lg font-bold md:text-base"
              >
                {link.label}
              </a>
            </li>
          ))}
          <button className="bg-[#3ebfff] text-white lg:bg-white px-6 py-2 rounded-full lg:text-black font-bold cursor-pointer">
            Contact
          </button>
        </ul>
      </nav>
    </header>
  );
}
