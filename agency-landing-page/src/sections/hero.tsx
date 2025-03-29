import { ArrowDown } from "../components/icons";

export function Hero() {
  return (
    <section className="bg-[url(/images/mobile/image-header.jpg)] md:bg-[url(/images/desktop/image-header.jpg)] w-full h-dvh bg-cover bg-center bg-no-repeat">
      <div className="flex justify-center items-center flex-col gap-y-12 h-full">
        <h1 className="font-bold text-white text-4xl lg:text-7xl text-center">
          WE ARE CREATIVES
        </h1>
        <div className="animate-bounce">
          <ArrowDown />
        </div>
      </div>
    </section>
  );
}
