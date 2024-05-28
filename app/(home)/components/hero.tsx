import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./title";

export default function Hero() {
  return (
    <div className="min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          We build{" "}
          <span className="underline underline-offset-8 decoration-green-500">
            {"awesome"}
          </span>
          <br />
          software
        </h1>
        <p className="w-100 md:w-96 text-lg text-gray-300">
          {
            "Welcome to Devcats, the alternative software development partner. Subscribe monthly, or pay a one time fee. No need to hire in house, just hire us. Think of us as your development partners, taking you from idea to launch."
          }
        </p>
        <Link href={"mailto:someone@gmail.com"} className="inline-block group">
          <Title
            text="Contact us 📨"
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
            <p>📢 Available for Work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
