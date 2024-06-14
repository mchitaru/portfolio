import React from "react";
import { SiNextdotjs, SiSupabase, SiTailwindcss } from "react-icons/si";
import Title from "./title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Icon } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Personal Blog",
    tech: [SiNextdotjs, SiTailwindcss],
    link: "https://www.agilecoach.ro/",
    cover: "/Project1.png",
    background: "bg-indigo-500",
  },
  {
    title: "Note Taking App",
    tech: [SiNextdotjs, SiTailwindcss, SiSupabase],
    link: "https://note-app-gilt-ten.vercel.app/",
    cover: "/Project2.png",
    background: "bg-green-500",
  },
];

export default function Projects() {
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🗂️"
        className="flex flex-col items-center justify-center"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
        {projects.map((project, index) => {
          return (
            <Link key={index} href={project.link}>
              <div className={cn("p-5 rounded-md", project.background)}>
                <Image
                  alt="image"
                  className="object-cover space-y-5 cursor-pointer"
                  width={1000}
                  height={500}
                  src={project.cover}
                />

                <DirectionAwareHover
                  imageUrl={project.cover}
                  className="w-full h-60 space-y-5 cursor-pointer"
                >
                  <div className="space-y-5">
                    <h1 className="text-2xl font-bold">{project.title}</h1>
                    <div className="flex items-center gap-5">
                      {project.tech.map((Icon, index) => {
                        return <Icon className="w-8 h-8" key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
