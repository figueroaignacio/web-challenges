import { Header } from "./components/Header";
import { Footer, Hero, Spotlights } from "./sections";

export default function App() {
  return (
    <div className="container mx-auto px-5 lg:px-0 py-8">
      <Header />
      <main>
        <Hero />
        <Spotlights />
      </main>
      <Footer />
    </div>
  );
}
