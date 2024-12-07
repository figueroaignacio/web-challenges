import { SpotlightCard } from "../components/SpotlightCard";
import { spotlights } from "../constants/spotlights";

export function Spotlights() {
  return (
    <section className="container mx-auto py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:grid-rows-2 md:grid-flow-col">
        {spotlights.slice(0, 3).map((spotlight, index) => (
          <div
            key={index}
            className={`${index === 1 ? "md:col-span-2" : "md:col-span-5"}`}
          >
            <SpotlightCard
              description={spotlight.description}
              image={spotlight.image}
              title={spotlight.title}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
