interface DestinationTab {
  images: {
    png: string;
    webp: string;
  };
  name: string;
  description: string;
  distance: string;
  travel: string;
}

export function DestinationDetails({
  destination,
}: {
  destination: DestinationTab;
}) {
  return (
    <>
      <picture>
        <img
          src={destination.images.webp || destination.images.png}
          alt={destination.name}
          className="animate-planet-spin max-w-40 lg:max-w-sm mx-auto"
        />
      </picture>
      <div>
        <div className="space-y-5">
          <h2 className="text-center lg:text-start mt-12 text-8xl font-bellefair">
            {destination.name}
          </h2>
          <p className="text-center lg:text-start lg:text-pretty lg:max-w-6xl text-muted-foreground tracking-wider line-clamp-6">
            {destination.description}
          </p>
        </div>
        <div className="bg-white/10 w-full h-[1px] my-12"></div>
        <div className="text-center lg:text-start space-y-6 my-12 lg:flex lg:justify-start gap-x-20">
          <div>
            <h3 className="text-3xl">AVG. DISTANCE</h3>
            <span className="font-bellefair">{destination.distance}</span>
          </div>
          <div>
            <h3 className="text-3xl">EST. TRAVEL TIME</h3>
            <span className="font-bellefair">{destination.travel}</span>
          </div>
        </div>
      </div>
    </>
  );
}
