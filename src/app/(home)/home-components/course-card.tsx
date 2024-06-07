"use client";

import { CourseCard as CourseCardT } from "@/types";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Image from "next/image";

interface Props {
  card: CourseCardT;
}

export default function CourseCard({ card }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {card.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-sm max-w-sm mt-2 text-neutral-300"
        >
          {card.content}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={`/images/${card.image}`}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="/"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          >
            {card.lang === "en" ? "Try now →" : "試課 →"}
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="/"
            className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
          >
            {card.lang === "en" ? "Details" : "內容"}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
