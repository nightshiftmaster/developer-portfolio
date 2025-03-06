import React from "react";

export const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl uppercase text-cyan">
        Front-End Web Developer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl  sm:text-4xl font-bold font-special text-orange">
        Vlad Medvedev
      </h1>
      <p className="text-lg mt-4 text-white">
        Turning ideas into digital experiences.
        <br />
        Passionate about code, design & everything in between.
      </p>
    </div>
  );
};
