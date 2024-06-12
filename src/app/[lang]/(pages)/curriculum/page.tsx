import Image from "next/image";
import { LangParams } from "@/types";
import { loadTranslation } from "@/lib/i18n";
import CourseTabs from "./course-tabs";

interface Props {
  params: LangParams;
}

export default async function Page({ params }: Props) {
  const allContents = await loadTranslation(params.lang);
  const curriculumContents = allContents["curriculum"];
  if (!curriculumContents)
    return (
      <p className=" text-3xl mx-auto my-24 w-full text-center">No content</p>
    );
  return (
    <div>
      <div className="mt-4 md:mt-8 relative h-[40rem]">
        <Image
          width={2400}
          height={1600}
          src={`/images/tutor1.jpeg`}
          alt="Student reading textbook"
          className=" h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-center text-7xl font-bold text-white">
            {curriculumContents.title}
          </h1>
          <p className="text-center px-2 md:px-12 text-2xl italic text-slate-50">
            {curriculumContents.tagline}
          </p>
        </div>
      </div>
      <CourseTabs lang={params.lang} courses={curriculumContents.courses} />
    </div>
  );
}
