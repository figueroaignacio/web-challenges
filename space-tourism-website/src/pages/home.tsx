import data from "../lib/data.json" with { type: "json" };

export function Home() {
  return (
    <div>
      <h1>Home</h1>
      {data.destinations.map((destination) => (
        <div key={destination.name}>{destination.name}</div>
      ))}
    </div>
  );
}
