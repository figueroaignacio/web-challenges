interface SpotlightCardProps {
  image: string;
  title: string;
  description: string;
}

export function SpotlightCard({
  description,
  image,
  title,
}: SpotlightCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-md transition-all duration-300 group">
      <img
        src={image}
        alt={title}
        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-1 sm:mb-2 text-white drop-shadow-lg">
          {title}
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:max-w-xl text-gray-100 drop-shadow-md line-clamp-2 sm:line-clamp-3">
          {description}
        </p>
      </div>
      <div
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      ></div>
    </div>
  );
}
