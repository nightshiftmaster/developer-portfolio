import React from "react";

export const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        Hello, my name is Vlad, I'm a Front-End Developer with 4+ years of
        experience building modern web applications. My expertise lies in
        JavaScript, TypeScript, React, Next.js, Redux, and Node.js. I create
        scalable, high-performance solutions with clean code — from architecture
        design to API integration and optimization. I've built e-commerce
        platforms, music apps, and portfolio projects, delivering products that
        meet business needs and user expectations. Whether you're looking for a
        developer to bring your project to life or strengthen your team — let's
        build something great together.
      </p>
      <button
        className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan"
        type="button"
      >
        My Projects
      </button>
    </div>
  );
};
