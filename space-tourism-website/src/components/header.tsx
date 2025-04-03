// Hooks
import { useState } from "react";

// Components
import { Link } from "react-router";
import { CloseIcon, MenuIcon } from "./icons";
import { Logo } from "./logo";

// Lib
import { navigation } from "../lib/constants";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="flex justify-between items-center py-4 px-6 md:px-0 md:pl-12">
      <Logo />
      <nav className="hidden md:block backdrop-blur-md px-56 py-5">
        <ul className="flex space-x-12">
          {navigation.map((item, index) => (
            <li key={index}>
              <Link to={item.href} className="text-lg font-medium">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={handleMenu}
        className="md:hidden"
        aria-label="Toggle menu"
      >
        <MenuIcon />
      </button>
      <nav
        className={`md:hidden fixed top-0 right-0 min-h-dvh w-4/5 max-w-xs backdrop-blur-md px-10 py-8 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <button
          onClick={handleMenu}
          className="w-full flex justify-end"
          aria-label="Close menu"
        >
          <CloseIcon />
        </button>
        <ul className="space-y-12 mt-12">
          {navigation.map((item, index) => (
            <li
              key={index}
              className="transform transition-all duration-300 ease-in-out"
            >
              <Link
                to={item.href}
                onClick={handleMenu}
                className="text-lg font-medium hover:text-blue-500 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={handleMenu}
        />
      )}
    </header>
  );
}
