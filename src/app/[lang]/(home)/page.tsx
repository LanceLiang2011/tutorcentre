import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Hero from "../../(home)/home-components/hero";
import ScrollGalaxy from "../../(home)/home-components/scroll-galaxy";
import CardGroup from "../../(home)/home-components/card-group";
import { loadTranslation } from "@/lib/i18n";
import { LangParams } from "@/types";

interface Props {
  params: LangParams;
}

export default async function Home({ params }: Props) {
  const allContents = await loadTranslation(params.lang);
  const homeContents = allContents["home"];
  return (
    <div className="flex flex-col items-center w-full mx-auto mt-16">
      <div className=" h-screen">
        <ScrollGalaxy />
        <Hero slides={homeContents.slides} />
      </div>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            {homeContents.title}
          </p>
        </div>
      </BackgroundGradientAnimation>
      <CardGroup cards={homeContents.courseCards} />
    </div>
  );
}
