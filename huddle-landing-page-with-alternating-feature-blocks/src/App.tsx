import { Cta } from "./components/cta";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Features } from "./sections/features";
import { Hero } from "./sections/hero";

export default function App() {
  return (
    <>
      <Header />
      <main className="container space-y-28 my-12 px-6 py-3 lg:px-12 lg:py-6">
        <Hero />
        <Features />
      </main>
      <Cta />
      <Footer />
    </>
  );
}
