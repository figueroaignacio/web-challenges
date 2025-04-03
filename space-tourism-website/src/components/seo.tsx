interface SeoProps {
  title: string;
  description: string;
}

export function Seo({ description, title }: SeoProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Ignacio Figueroa" />
    </>
  );
}
