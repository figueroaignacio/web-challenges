import { MoonIcon } from "./icons"

export function Header() {
  return (
    <header className="bg-card border-border border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-3">
        <h1>Where in the world</h1>
        <MoonIcon />
      </div>
    </header>
  )
}