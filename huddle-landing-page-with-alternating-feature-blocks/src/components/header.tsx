import { Logo } from "./logo";

export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-3 lg:px-12 lg:py-6 sticky inset-0 backdrop-blur-md z-50">
      <div>
        <Logo />
      </div>
      <button className="bg-white shadow-sm rounded-full px-12 py-2 text-xs font-bold cursor-pointer hover:opacity-80 transition-opacity duration-100">
        Try it free
      </button>
    </header>
  );
}
