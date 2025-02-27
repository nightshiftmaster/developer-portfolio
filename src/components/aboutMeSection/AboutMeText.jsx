import React from "react";

export const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        Hello, my name is Vlad, I'm a Front-End Developer with 4+ years of
        experience creating modern, user-friendly web applications. My expertise
        lies in JavaScript, TypeScript, React, Next.js, and Redux, with a solid
        understanding of Node.js on the backend. I specialize in building
        scalable, high-performance applications with clean, maintainable code.
        From designing architecture and integrating APIs to debugging and
        optimizing performance — I deliver solutions that align with business
        needs and user expectations. Over the years, I've developed and deployed
        several real-world projects, including e-commerce platforms, music
        streaming apps, and portfolio applications. I’m always learning,
        improving, and exploring new technologies to create high-quality digital
        experiences. Whether you're looking for a developer to bring your
        project to life or a team member to strengthen your product — let's
        build something great together.
      </p>
      <button
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center"
        type="button"
      >
        My Projects
      </button>
    </div>
  );
};
