import { Link } from "react-router";
import { VideoSource } from "../components/video-source";

// import data from "../lib/data.json" with { type: "json" };

export function Home() {
  return (
    <div>
      <VideoSource source="/videos/video1.webm" />
      <h1>So you want to travel to space</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <Link to="/destination">EXPLORE</Link>
      {/* {data.destinations.map((destination) => (
        <div key={destination.name}>{destination.name}</div>
      ))} */}
    </div>
  );
}
