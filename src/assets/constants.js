import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

export const links = [
  { link: "About me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

export const skills = [
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: IoLogoJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "React", icon: FaReact },
  { skill: "Redux", icon: SiRedux },
  { skill: "Next.js", icon: SiNextdotjs },
  { skill: "Tailwindcss", icon: RiTailwindCssFill },
  { skill: "Node.js", icon: FaNodeJs },
];

export const projects = [
  {
    title: "Music Artist Website",
    year: "Jan2025",
    description:
      "Interactive music artist portfolio with a music player, video showcase, photo gallery, and smooth animations",
    stack: "React, Redux, GSAP, CSS Animations",
    image: "/images/musicartist.png",
    align: "left",
    link: "",
  },
  {
    title: "Foody",
    year: "Apr2024",
    description:
      "Full-stack food delivery application with user authentication, product catalog, cart functionality, and order management.",
    stack: "Next.js, React, Zustand, TypeScript, Node.js, Tailwindcss, Prisma",
    image: "/images/foody.png",
    align: "right",
    link: "",
  },
  {
    title: "GadgetHub",
    year: "Jan2024",
    description:
      "Full-stack e-commerce platform with user authentication, product search, and cart functionality.",
    stack: "Next.js, React, Redux, TypeScript, Node.js, Tailwindcss, MongoDB",
    image: "/images/gadgethub.png",
    align: "left",
    link: "",
  },
  {
    title: "Musix",
    year: "Jul2023",
    description:
      "Full-stack music streaming application with genre and artist exploration, real-time charts, search functionality, audio player and responsive design.",
    stack: "React, Express.js, Redux, Node.js, Tailwindcss, MongoDB",
    image: "/images/musix.png",
    align: "right",
    link: "",
  },
  {
    title: "Portfolimix",
    year: "Oct2023",
    description:
      "Portfolio website with project showcase, blog, and contact form.",
    stack: "Next.js, React, TypeScript, Tailwindcss",
    image: "/images/portfolimix.png",
    align: "left",
    link: "",
  },
  {
    title: "Chat App",
    year: "Nov2022",
    description:
      "Real-time chat application with user authentication, one-on-one messaging and group chats",
    stack: "React, Redux, Node.js, Socket.io",
    image: "/images/chatapp.png",
    align: "right",
    link: "",
  },
];
