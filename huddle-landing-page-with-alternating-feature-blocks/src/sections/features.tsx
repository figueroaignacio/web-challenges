export function Features() {
  const features = [
    {
      img: "/images/illustration-grow-together.svg",
      title: "Grow Together",
      description:
        "Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.",
    },
    {
      img: "/images/illustration-flowing-conversation.svg",
      title: "Flowing Conversations",
      description:
        "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
    },
    {
      img: "/images/illustration-your-users.svg",
      title: "Your Users",
      description:
        "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
    },
  ];

  return (
    <section className="grid grid-col-1 gap-y-40 max-w-5xl mx-auto">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center md:flex-row text-center md:text-start lg:items-center gap-12 lg:gap-40 md:nth-[1]:flex-row-reverse md:nth-[3]:flex-row-reverse"
        >
          <img src={feature.img} alt={feature.title} className="size-96" />
          <div className="space-y-3">
            <h2 className="font-bold text-xl">{feature.title}</h2>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
