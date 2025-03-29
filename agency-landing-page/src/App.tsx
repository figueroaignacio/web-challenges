import { Header } from "./components/header";
import { About } from "./sections/about";
import { Hero } from "./sections/hero";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
