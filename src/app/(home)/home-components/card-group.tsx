import { CourseCard as CourseCardT } from "@/types";
import React from "react";
import CourseCard from "./course-card";

interface Props {
  cards: CourseCardT[];
}

export default function CardGroup({ cards }: Props) {
  return (
    <div className="grid bg-gradient-to-bl from-black to-slate-900 w-full pt-12 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
      {cards?.map((card) => (
        <CourseCard key={card.title} card={card} />
      ))}
    </div>
  );
}
