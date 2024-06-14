"use client";
import React from "react";
import Title from "./title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiQt,
  SiPhp,
  SiLaravel,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  {
    text: "QT",
    icon: SiQt,
  },
  {
    text: "Laravel",
    icon: SiLaravel,
  },
  {
    text: "Next.js",
    icon: SiNextdotjs,
  },
  {
    text: "Node.js",
    icon: SiNodedotjs,
  },
  {
    text: "C++",
    icon: SiCplusplus,
  },
  {
    text: "PHP",
    icon: SiPhp,
  },
  {
    text: "Javascript",
    icon: SiJavascript,
  },
  {
    text: "React",
    icon: SiReact,
  },
  {
    text: "Tailwind",
    icon: SiTailwindcss,
  },
];

export default function Skills() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🛠️"
        className="flex flex-col items-center justify-center"
      />
      <HoverEffect items={skills} />
    </div>
  );
}
