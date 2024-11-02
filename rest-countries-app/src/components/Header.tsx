import {Link} from "react-router-dom";
import {ThemeToggle} from "./ThemeToggle.tsx";

export function Header() {
  return (
    <header className="flex items-center justify-between py-5 ">
      <Link to="/">Where in the world?</Link>
      <ThemeToggle/>
    </header>
  )
}