// Providers
import { ThemeProvider } from "./contexts/theme-provider";

// Pages
import { Route, Routes } from "react-router";
import { CountryDetails } from "./pages/country-details";
import { Home } from "./pages/home";

// Components
import { ScrollToTop } from "./components/scroll-to-top";

// Layout
import { Layout } from "./layout/layout";

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/country/:slug" element={<CountryDetails />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
