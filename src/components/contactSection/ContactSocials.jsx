import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";

const socials = [
  { icon: FaGithub, link: "https://github.com/nightshiftmaster" },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/vlad-medvedev-069b6425b/",
  },
  {
    icon: FaSquareUpwork,
    link: "https://www.upwork.com/freelancers/~017422bdee403ecbd4",
  },
];

export const ContactSocials = () => {
  return (
    <div className="flex gap-4">
      {socials.map((item, index) => {
        return (
          <div
            key={index}
            className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center hover:scale-125 transition-all duration-500"
          >
            <a
              href={item.link}
              className="cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <item.icon />
            </a>
          </div>
        );
      })}
    </div>
  );
};
