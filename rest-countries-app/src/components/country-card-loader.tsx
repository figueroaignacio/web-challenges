export function CountryCardLoader() {
  return (
    <article className="h-full w-full animate-pulse bg-card border border-border rounded-xl">
      <div className="w-full h-56 rounded-lg bg-muted" />
      <div className="px-4 py-8 space-y-4">
        <div className="h-6 w-3/4 rounded-md bg-muted" />
        <div className="flex flex-col space-y-3">
          <div className="h-4 w-5/6 rounded-md bg-muted" />
          <div className="h-4 w-4/6 rounded-md bg-muted" />
          <div className="h-4 w-3/6 rounded-md bg-muted" />
        </div>
        <div className="flex gap-2">
          <div className="h-10 w-full rounded-2xl bg-muted" />
          <div className="h-10 w-full rounded-2xl bg-muted" />
        </div>
      </div>
    </article>
  );
}
