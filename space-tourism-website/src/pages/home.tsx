import { Link } from "react-router";
import { VideoSource } from "../components/video-source";

// * This is how to use json in javascript
// import data from "../lib/data.json" with { type: "json" };
{
  /* {data.destinations.map((destination) => (
  <div key={destination.name}>{destination.name}</div>
))} */
}

export function Home() {
  return (
    <>
      <VideoSource source="/videos/video1.webm" />
      <section className="grid text-center lg:text-start place-items-center lg:grid-cols-2 min-h-[80dvh] gap-y-12">
        <div className="space-y-3">
          <h1 className="text-5xl font-bellefair flex flex-col tracking-widest">
            So you want to travel to <span className="text-7xl">SPACE</span>
          </h1>
          <p className="text-white">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link
          to="/destination"
          className="bg-white text-black size-52 flex justify-center items-center rounded-full hover:scale-110 transition-transform duration-100 hover:brightness-200 hover:shadow-2xl font-bellefair text-2xl tracking-widest"
        >
          EXPLORE
        </Link>
      </section>
    </>
  );
}
