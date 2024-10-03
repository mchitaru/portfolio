import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./title";

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse bg-background gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          I like to build <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"awesome"}
          </span>{" "}
          software
        </h1>
        <p className="w-auto max-w-lg text-lg text-gray-600 dark:text-gray-300">
          {`I am a highly experienced software developer with over 18 years in the industry,
              proficient in multiple programming languages and development environments.`}
          <br />
          {`With a
              proven track record in full-stack development, software architecture, and leading
              development teams to success, I also have significant experience in agile
              methodologies and project management`}
        </p>
        <Link
          href={"mailto:marius.chitaru@gmail.com"}
          className="inline-block group min-h-24"
        >
          <Title
            text="Contact me 📨"
            className="text-3xl font-bold group-hover:text-green-400 transition-all"
          />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div>
            <div className="flex gap-3 -translate-x-8">
              <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
              <div className="w-32 h-32 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <Link href={"mailto:marius.chitaru@gmail.com"}>
              <p>📢 Available for Work</p>
            </Link>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
