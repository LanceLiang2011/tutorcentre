import Image from "next/image";
import { LangParams } from "@/types";
import { loadTranslation } from "@/lib/i18n";

interface Props {
  params: LangParams;
}

export default async function Page({ params }: Props) {
  const allContents = await loadTranslation(params.lang);
  return (
    <div>
      <div className="mt-12 relative h-[40rem]">
        <Image
          width={2400}
          height={1600}
          src={`/images/tutor1.jpeg`}
          alt="Student reading textbook"
          className=" h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 flex flex-col items-center justify-center">
          <h1></h1>
        </div>
      </div>
    </div>
  );
}
