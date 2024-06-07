"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { SlideContent } from "@/types";

interface Props {
  slides: SlideContent[];
}

export default function Hero({ slides }: Props) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollDir, setScrollDir] = useState(1);
  function changeNextPage() {
    setCurrentSlide((cur) => (cur + 1) % slides.length);
    setScrollDir(1);
  }
  function changePreviousPage() {
    setCurrentSlide((cur) => (cur - 1 < 0 ? slides.length - 1 : cur - 1));
    setScrollDir(-1);
  }
  return (
    <div className="max-w-7xl mx-auto opacity-80 flex">
      {slides.map(
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
                  className="rounded-full bg-foreground/90 w-12 h-12 md:w-16 md:h-16"
                >
                  ❮
                </button>
                <div className="absolute inset-4 -z-10 w-4/5 md:w-3/5 mx-auto h-72 -translate-y-1/2">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 0.6 },
                    }}
                    transition={{ duration: 0.8 }}
                    className=" rounded-xl w-full h-full bg-slate-600/80  text-center flex flex-col gap-8 pt-16"
                  >
                    <h2 className=" text-5xl md:text-6xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
                      {content.title}
                    </h2>
                    <p className=" md:text-xl font-semibold px-2">
                      {content.content}
                    </p>
                  </motion.div>
                </div>
                <button
                  onClick={changeNextPage}
                  className="rounded-full bg-foreground/90 w-12 h-12 md:w-16 md:h-16"
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
