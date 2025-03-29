import { Header } from "./components/header";
import { About } from "./sections/about";
import { Hero } from "./sections/hero";
import { Services } from "./sections/services";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </>
  );
}
