interface CrewTab {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export function CrewDetails({ crew }: { crew: CrewTab }) {
  return (
    <div className="lg:flex lg:justify-center lg:items-center gap-x-24">
      <picture>
        <img
          src={crew.images.webp}
          alt={crew.name}
          className="max-w-40 mx-auto lg:mx-0 lg:max-w-full lg:h-full object-contain"
        />
      </picture>
      <div>
        <div className="space-y-5">
          <h2 className="text-center lg:text-start lg:text-6xl mt-12 text-3xl font-bellefair">
            {crew.name}
          </h2>
          <h3 className="text-center lg:text-start font-bold text-xl lg:text-2xl">
            {crew.role}
          </h3>
          <div className="bg-white/10 w-full h-[1px] my-3"></div>
          <p className="text-center lg:text-start lg:text-pretty lg:max-w-6xl text-muted-foreground tracking-wider line-clamp-6">
            {crew.bio}
          </p>
        </div>
        <div className="text-center lg:text-start space-y-6 my-12 lg:flex lg:justify-start gap-x-20"></div>
      </div>
    </div>
  );
}
