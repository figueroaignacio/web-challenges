import { ToggleTheme } from "./toggle-theme"

export function Header() {
  return (
    <header className="bg-card border-border border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-3">
        <h1 className="font-bold text-2xl">Where in the world</h1>
        <ToggleTheme />
      </div>
    </header>
  )
}