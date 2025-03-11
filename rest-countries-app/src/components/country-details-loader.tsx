export function CountryDetailsLoader() {
  return (
    <article className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-center h-full w-full animate-pulse bg-card border border-border rounded-xl">
    <div className="lg:col-span-6 w-full h-96 rounded-lg bg-muted" />
    <div className="lg:col-span-6 flex flex-col gap-4 px-4 py-8">
      <div className="h-8 w-3/4 rounded-md bg-muted" />

      <div className="lg:flex lg:justify-between">
        <div className="space-y-4 mb-4">
          <div className="h-4 w-5/6 rounded-md bg-muted" />
          <div className="h-4 w-5/6 rounded-md bg-muted" />
          <div className="h-4 w-5/6 rounded-md bg-muted" />
          <div className="h-4 w-4/6 rounded-md bg-muted" />
          <div className="h-4 w-4/6 rounded-md bg-muted" />
        </div>
        <div className="space-y-4">
          <div className="h-4 w-4/6 rounded-md bg-muted" />
          <div className="h-4 w-4/6 rounded-md bg-muted" />
          <div className="h-4 w-4/6 rounded-md bg-muted" />
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        <div className="h-8 w-24 rounded-md bg-muted" />
        <div className="h-8 w-24 rounded-md bg-muted" />
        <div className="h-8 w-24 rounded-md bg-muted" />
      </div>
      <div className="w-full flex gap-x-2">
        <div className="h-12 w-full rounded-2xl bg-muted" />
        <div className="h-12 w-full rounded-2xl bg-muted" />
      </div>
    </div>
  </article>
  );
}
