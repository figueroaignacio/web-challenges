export function Hero() {
  return (
    <section className="min-h-[60dvh] grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start gap-y-6 gap-x-6 justify-center">
      <div className="flex flex-col justify-center gap-y-4">
        <h1 className="font-semibold text-2xl md:text-4xl">
          Build The Community Your Fans Will Love
        </h1>
        <p className="font-extralight md:text-lg max-w-md text-pretty mx-auto lg:mx-0">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="bg-primary rounded-full py-3 px-6 text-white my-5 hover:brightness-200 hover:scale-[1.02] transition-[transform, opacity] duration-75 cursor-pointer lg:w-fit">
          Get Started For Free
        </button>
      </div>
      <picture className="flex justify-center items-center">
        <img src="/images/illustration-mockups.svg" alt="Hero" />
      </picture>
    </section>
  );
}
