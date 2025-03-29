export function About() {
  const items = [
    {
      img: "bg-[url(/images/mobile/image-transform.jpg)] lg:bg-[url(/images/desktop/image-transform.jpg)]",
      buttonVariant: "bg-[#ffd300] text-black font-semibold",
      title: "Tranform your brand",
      description:
        "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
    },
    {
      img: "bg-[url(/images/mobile/image-stand-out.jpg)] lg:bg-[url(/images/desktop/image-stand-out.jpg)]",
      title: "Stand out to the right audience",
      description:
        "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
      buttonVariant: "bg-[#ff7364] text-white font-semibold",
    },
  ];

  return (
    <section>
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className={`${
              item.img
            } w-full h-80 lg:h-auto bg-cover bg-center bg-no-repeat ${
              index === 0 ? "lg:order-1" : ""
            }`}
          />
          <div className="p-6 lg:px-32 lg:py-40 space-y-5 text-center lg:flex lg:flex-col lg:justify-center lg:text-start">
            <h2 className="text-3xl font-bold">{item.title}</h2>
            <p className="text-black/70">{item.description}</p>
            <button
              className={`justify-start rounded-full py-4 cursor-pointer hover:scale-[1.02] transition-transform duration-100 ${item.buttonVariant}`}
            >
              Learn More
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}
