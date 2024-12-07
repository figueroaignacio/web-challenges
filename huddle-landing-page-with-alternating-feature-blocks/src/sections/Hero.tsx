import { Button } from "../components/Button";
import HeroImage from "../components/Hero/HeroImage";

export function Hero() {
  return (
    <section className="relative py-20 grid grid-cols-1 lg:grid-cols-2 gap-x-8">
      <HeroImage />
      <div className="flex flex-col gap-6 justify-center text-center max-w-96 mx-auto lg:max-w-full lg:items-start lg:text-start">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Build The Community Your Fans Will Love
        </h1>
        <p className="text-foreground lg:text-xl">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button>Get Started For Free</Button>
      </div>
      <img
        src="/assets/images/illustration-mockups.svg"
        alt=""
        className="size-full py-12"
      />
    </section>
  );
}
