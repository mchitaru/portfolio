import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const socials = [
  {
    link: "https://www.linkedin.com/in/marius-chitaru/",
    label: "Linkedin",
    icon: SiLinkedin,
  },
  {
    link: "https://www.linkedin.com/in/marius-chitaru/",
    label: "Github",
    icon: SiGithub,
  },
  {
    link: "https://www.linkedin.com/in/marius-chitaru/",
    label: "X",
    icon: SiX,
  },
];

export default function Navbar({ className }: { className?: string }) {
  return (
    <nav
      className={cn(
        "py-10 flex justify-between items-center animate-move-down",
        className
      )}
    >
      <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
        DevCats 👨🏻‍💻
      </h1>
      <div className="flex items-center gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <Link key={index} href={social.link} aria-label={social.label}>
              <Icon className="w-5 h-5 hover:scale-125 transition-all" />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
