import { use } from "react"
import { ThemeProviderContext } from "../contexts/theme-provider"

export const useTheme = () => {
  const context = use(ThemeProviderContext)

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider")

  return context
}