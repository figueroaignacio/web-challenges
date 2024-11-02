import {useEffect, useState} from 'react'
import {MoonIcon, SunIcon} from "./Icons"

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      setIsDarkMode(!isDarkMode)
      updateTheme(!isDarkMode)
      return
    }

    document.startViewTransition(() => {
      setIsDarkMode(!isDarkMode)
      updateTheme(!isDarkMode)
    })
  }

  const updateTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-background border border-border hover:bg-card transition-colors"
      aria-label={isDarkMode ? "Light" : "Dark"}
    >
      {isDarkMode ? (
        <SunIcon/>
      ) : (
        <MoonIcon/>
      )}
    </button>
  )
}