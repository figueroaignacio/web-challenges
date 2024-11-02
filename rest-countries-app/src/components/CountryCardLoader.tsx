export function CountryCardLoader() {
  return (
    <div className="bg-card border-border border-[1px] p-4 rounded-lg animate-pulse space-y-5">
      <div className="w-full h-40 bg-skeleton rounded-md"/>
      <div className="h-6 rounded w-3/4 mb-2 bg-skeleton"/>
      <div className="space-y-2.5">
        <div className="h-4 bg-skeleton rounded w-1/2"/>
        <div className="h-4 bg-skeleton rounded w-1/2"/>
        <div className="h-4 bg-skeleton rounded w-1/2"/>
      </div>
      <div className="flex gap-x-2">
        <div className="h-8 bg-skeleton rounded w-full"/>
        <div className="h-8 bg-skeleton rounded w-full"/>
      </div>
    </div>
  );
}
