import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";

export const SingleProject = ({ ...item }) => {
  const { title, year, description, image, link, align } = item;
  return (
    <div
      className={`flex w-full flex-col-reverse items-center gap-8 ${
        align === "left" ? "md:flex-row-reverse" : "md:flex-row"
      } justify-end`}
    >
      <div className="w-[30vw] flex flex-col gap-2">
        <h2 className="md:text-3xl text-xl text-orange">{title}</h2>
        <h2 className={`text-lg font-thin text-white font-special  text-left`}>
          {year}
        </h2>
        <p className="text-white ">{description}</p>
        <a
          href={link}
          className={`text-lg flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer justify-self-center ${
            align === "left" ? "md:justify-self-start" : "md:justify-self-end"
          }`}
          target="_blank"
          rel="noreferrer"
        >
          View
          <BiSolidRightTopArrowCircle />
        </a>
      </div>
      <div className="max-h-[250px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-30 absolute hover:opacity-0 transition-all duration-500 hidden md:block"></div>
        <img src={image} alt="project image" className="w-full h-full" />
      </div>
    </div>
  );
};
