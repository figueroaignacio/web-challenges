import { Header } from "./components/header";
import { About } from "./sections/about";
import { Services } from "./sections/features";
import { Hero } from "./sections/hero";

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
