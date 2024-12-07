import { Header } from "./components/Header";
import { Footer, Hero, Spotlights } from "./sections";

export default function App() {
  return (
    <div className="container mx-auto px-5 py-8 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Spotlights />
      </main>
      <Footer />
    </div>
  );
}
