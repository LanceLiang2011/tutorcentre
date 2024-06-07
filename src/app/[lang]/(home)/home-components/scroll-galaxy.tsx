"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollGalaxy() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -1000]); // Adjust the range as needed
  const MotionImage = motion(Image);

  return (
    <div className="absolute w-full h-[150vh] top-0 left-0 overflow-hidden -z-10">
      <MotionImage
        src={`/images/space.jpeg`}
        width={2893}
        height={4340}
        alt="space"
        className="w-full h-[220vh] object-fit"
        style={{ y }}
      />
    </div>
  );
}
