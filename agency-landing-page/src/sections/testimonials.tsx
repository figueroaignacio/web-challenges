export function Testimonials() {
  const testimonials = [
    {
      avatar: "/images/image-emily.jpg",
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.",
      role: "Marketing Director",
    },
    {
      avatar: "/images/image-thomas.jpg",
      text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      role: "Chief Operating Officer",
    },
    {
      avatar: "/images/image-jennie.jpg",
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside.Highly recommended!",
      name: "Jennie F.",
      role: "Business Owner",
    },
  ];

  return (
    <section className="min-h-dvh flex flex-col justify-center items-center px-2">
      <h2 className="text-xl my-12 lg:text-4xl text-black/70 text-center font-bold">
        CLIENT TESTIMONIALS
      </h2>
      <ul className="space-y-6 lg:space-y-0 lg:flex justify-center items-center h-auto gap-2 max-w-7xl mx-auto ">
        {testimonials.map((item) => (
          <li className="flex flex-col text-center items-center gap-y-12 p-14 shadow-md h-auto rounded-xl border border-black/20">
            <img
              src={item.avatar}
              alt={item.name}
              className="size-12 rounded-full"
            />
            <p className="text-sm font-semibold text-black/70">"{item.text}"</p>
            <div className="space-y-3">
              <h3 className="font-bold">{item.name}</h3>
              <span>{item.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
