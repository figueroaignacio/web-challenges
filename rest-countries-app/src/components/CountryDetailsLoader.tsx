export function CountryDetailsLoader() {
  return (
    <section className="space-y-6 animate-pulse max-w-4xl mx-auto py-8">
      <div className="h-10 w-20 bg-skeleton rounded-md"></div>
      <div className="flex flex-col">
        <div className="h-10 w-3/4 bg-skeleton rounded-md mx-auto mb-6"></div>
        <div className="w-full h-64 bg-skeleton rounded-md mb-5"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <ul className="space-y-2">
            <div className="h-6 w-1/2 bg-skeleton rounded-md"></div>
            <div className="h-6 w-1/3 bg-skeleton rounded-md"></div>
            <div className="h-6 w-1/2 bg-skeleton rounded-md"></div>
            <div className="h-6 w-1/3 bg-skeleton rounded-md"></div>
          </ul>
          <ul className="space-y-2">
            <div className="h-6 w-3/4 bg-skeleton rounded-md"></div>
            <div className="h-6 w-1/2 bg-skeleton rounded-md"></div>
            <div className="h-6 w-3/4 bg-skeleton rounded-md"></div>
            <div className="h-6 w-1/2 bg-skeleton rounded-md"></div>
          </ul>
        </div>
      </div>
    </section>
  );
}
