import { CallToAction } from "./components/CallToAction";
import { Header } from "./components/Header";
import { Footer, Hero, Spotlights } from "./sections";

export default function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-5 overflow-x-hidden pb-20">
        <Hero />
        <Spotlights />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
