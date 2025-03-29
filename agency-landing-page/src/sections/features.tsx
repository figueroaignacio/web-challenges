export function Features() {
  const items = [
    {
      img: "bg-[url(/images/mobile/image-graphic-design.jpg)] lg:bg-[url(/images/desktop/image-graphic-design.jpg)]",
      title: "Graphic design",
      description:
        "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential client's attention.",
    },
    {
      img: "bg-[url(/images/mobile/image-photography.jpg)] lg:bg-[url(/images/desktop/image-photography.jpg)]",
      title: "Photography",
      description:
        "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    },
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={index}
          className={`${item.img} w-full h-[70dvh] lg:h-[70dvh] bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-12 items-center text-center space-y-4`}
        >
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-black/60">
            {item.title}
          </h2>
          <p className="max-w-md bg-clip-text text-transparent bg-black/60">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
}
