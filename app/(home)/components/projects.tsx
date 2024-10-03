import React from "react";
import {
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
  SiMarkdown,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";
import Title from "./title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Icon } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Agilecoach - Personal Blog",
    tech: [SiNextdotjs, SiTailwindcss, SiMarkdown],
    link: "https://www.agilecoach.ro/",
    cover: "/Project1.png",
    background: "bg-indigo-500",
  },
  {
    title: "Notefy - Markdown Note Taking App",
    tech: [SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma],
    link: "https://get-notefy.vercel.app/",
    cover: "/Project2.png",
    background: "bg-green-500",
  },
  {
    title: "Mailwiki - Business Intelligence for Email Campaigns",
    tech: [SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma],
    link: "https://mailwiki.vercel.app/",
    cover: "/Project3.png",
    background: "bg-green-500",
  },
  {
    title: "Rejob - Remote Jobs Platform",
    tech: [SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma],
    link: "https://getrejob.vercel.app/",
    cover: "/Project4.png",
    background: "bg-green-500",
  },
  {
    title: "Stomato - Dental Clinic Management Platform",
    tech: [SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma],
    link: "https://stomato.vercel.app/",
    cover: "/Project5.png",
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
            <Link
              key={index}
              href={project.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div className={cn("p-5 rounded-md", project.background)}>
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
