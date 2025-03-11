import { useTheme } from "../hooks/use-theme"
import { MoonIcon, SunIcon } from "./icons"

export function ToggleTheme() {
  const { setTheme, theme } = useTheme()

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light")
    } else  {
      setTheme("dark")
    }
  }

  return (
    <button onClick={toggleTheme} className="cursor-pointer">
      {theme === "dark" ? <MoonIcon/> : <SunIcon/>}     
    </button>
  )
}