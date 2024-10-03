"use client";
import React from "react";
import Title from "./title";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiCss3,
  SiTailwindcss,
  SiQt,
  SiPhp,
  SiLaravel,
  SiCplusplus,
  SiTypescript,
  SiPrisma,
  SiHtml5,
} from "react-icons/si";

const skills = [
  {
    text: "Html5",
    icon: SiHtml5,
  },
  {
    text: "Typescript",
    icon: SiTypescript,
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
    text: "React",
    icon: SiReact,
  },
  {
    text: "Css",
    icon: SiCss3,
  },
  {
    text: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    text: "Prisma",
    icon: SiPrisma,
  },
  {
    text: "PHP",
    icon: SiPhp,
  },
  {
    text: "Laravel",
    icon: SiLaravel,
  },
  {
    text: "C++",
    icon: SiCplusplus,
  },
  {
    text: "QT",
    icon: SiQt,
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
