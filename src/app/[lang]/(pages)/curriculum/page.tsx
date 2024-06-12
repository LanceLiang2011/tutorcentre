import Image from "next/image";
import { LangParams } from "@/types";
import { loadTranslation } from "@/lib/i18n";
import CourseTabs from "./course-tabs";
import { PromotionCard } from "./promotion-card";

const promotionCards = {
  en: [
    {
      title: "Private One-on-One Tutoring",
      image: "/images/school_teachers.png",
      description:
        "Our personalized one-on-one tutoring system tailors a unique learning plan for your child based on their individual learning situation. This helps to unlock your child's learning potential.",
    },
    {
      title: "3-6 Small Course",
      image: "/images/cute-scholar.png",
      description:
        "Deeply analyze the difficulties in learning, breaking down the knowledge system and improving learning efficiency quickly. Clear up doubts and help students overcome learning bottlenecks.",
    },
    {
      title: "Interactive Class",
      image: "/images/lego-block.png",
      description:
        "Interactive small classes that combine Lego Robotics and Programming to foster collaboration and competition among students. Students learn from each other in a highly engaging environment.",
    },
  ],
  zh: [
    {
      title: "1对1个性化辅导",
      image: "/images/school_teachers.png",
      description:
        "1对1个性化学习体系，从孩子自身的学习情况出发，给孩子制定一套专属学习方案，挖掘孩子学习潜能。",
    },
    {
      title: "小班课堂",
      image: "/images/cute-scholar.png",
      description:
        "深入剖析学习中的重难点、易错点，单点突破+知识体系梳理，快速提升学习效率。讲解释疑入里，使学生突破学习中的瓶颈。",
    },
    {
      title: "互动课程",
      image: "/images/lego-block.png",
      description:
        "互动小班课程，结合乐高机器人和编程，促进学生之间的协作与竞争。学生们在高度互动的环境中相互学习。",
    },
  ],
};

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
      <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap my-16 md:my-24 lg:my-28 mx-auto w-full items-center justify-center gap-8">
        {promotionCards[params.lang as "en" | "zh"].map((card) => (
          <PromotionCard
            key={card.title}
            title={card.title}
            content={card.description}
            image={card.image}
          />
        ))}
      </div>
      <CourseTabs lang={params.lang} courses={curriculumContents.courses} />
    </div>
  );
}
