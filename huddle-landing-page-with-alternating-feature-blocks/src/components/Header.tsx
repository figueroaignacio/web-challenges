import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="flex justify-between">
      <div>
        <Logo />
      </div>
      <button className="">Try It Free</button>
    </header>
  );
}
