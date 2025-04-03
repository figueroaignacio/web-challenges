// import data from "../lib/data.json" with { type: "json" };
import { VideoSource } from "../components/video-source";

export function Home() {
  return (
    <div>
      <VideoSource source="/videos/video1.webm" />
      <h1>Home</h1>

      {/* {data.destinations.map((destination) => (
        <div key={destination.name}>{destination.name}</div>
      ))} */}
    </div>
  );
}
