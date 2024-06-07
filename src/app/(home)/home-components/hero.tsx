"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Content = {
  image: string;
  title: string;
  content: string;
  slide: number;
};

const contents: Content[] = [
  {
    image: "space2.jpg",
    title: "title",
    content: "content content content content content",
    slide: 0,
  },
  {
    image: "reading1.jpeg",
    title: "title 2",
    content: "content content content content content",
    slide: 1,
  },
  {
    image: "art2.jpeg",
    title: "title 3",
    content: "content content content content content",
    slide: 2,
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollDir, setScrollDir] = useState(1);
  function changeNextPage() {
    setCurrentSlide((cur) => (cur + 1) % contents.length);
    setScrollDir(1);
  }
  function changePreviousPage() {
    setCurrentSlide((cur) => (cur - 1 < 0 ? contents.length - 1 : cur - 1));
    setScrollDir(-1);
  }
  return (
    <div className="max-w-7xl mx-auto opacity-80 flex">
      {contents.map(
        (content) =>
          content.slide === currentSlide && (
            <motion.div
              className="relative w-full origin-top"
              key={content.slide}
              initial={{ opacity: 0, x: -500 * scrollDir }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            >
              <Image
                src={`/images/${content.image}`}
                alt={content.title}
                className="h-[36rem] object-cover rounded-xl"
                width={1200}
                height={800}
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <button
                  onClick={changePreviousPage}
                  className="rounded-full bg-secondary w-12 h-12 md:w-16 md:h-16"
                >
                  ❮
                </button>
                <div className="absolute rounded-xl bg-slate-600/80 inset-4 -z-10 text-center w-4/5 md:w-3/5 mx-auto h-72 -translate-y-1/2 flex flex-col gap-8 pt-16">
                  <h2 className=" text-5xl md:text-6xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                    {content.title}
                  </h2>
                  <p className=" md:text-xl font-semibold">{content.content}</p>
                </div>
                <button
                  onClick={changeNextPage}
                  className="rounded-full bg-secondary w-12 h-12 md:w-16 md:h-16"
                >
                  ❯
                </button>
              </div>
            </motion.div>
          )
      )}
    </div>
  );
}
