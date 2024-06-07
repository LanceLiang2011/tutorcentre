import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Hero from "./home-components/hero";
import ScrollGalaxy from "./home-components/scroll-galaxy";
import CardGroup from "./home-components/card-group";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full mx-auto mt-16">
      <div className=" h-screen">
        <ScrollGalaxy />
        <Hero />
      </div>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Education X Exploration
          </p>
        </div>
      </BackgroundGradientAnimation>
      <CardGroup />
    </div>
  );
}
