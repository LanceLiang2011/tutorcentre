"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

interface Props {
  title: string;
  content: string;
  image: string;
}

export function PromotionCard({ title, content, image }: Props) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={image}
          alt={title}
          height={800}
          width={800}
          className="object-contain"
        />
        <p className="text-base sm:text-xl md:text-2xl text-black mt-4 mb-2 ">
          {title}
        </p>
        <p className="text-sm md:text-base text-neutral-600 ">{content}</p>
      </BackgroundGradient>
    </div>
  );
}
