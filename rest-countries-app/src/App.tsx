// Providers
import { ThemeProvider } from "./contexts/theme-provider";

// Pages
import { Route, Routes } from "react-router";
import { CountryDetails } from "./pages/country-details";
import { Home } from "./pages/home";

// Layout
import { Layout } from "./layout/layout";

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/country:id" element={<CountryDetails />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
