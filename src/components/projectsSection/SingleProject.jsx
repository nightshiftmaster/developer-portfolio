import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { StackItem } from "./StackItem";

export const SingleProject = ({ ...item }) => {
  const { title, year, description, stack, image, link, align } = item;
  return (
    <div
      className={`flex w-full flex-col-reverse items-center  border-darkgrey border py-10 px-7 rounded-xl gap-8 ${
        align === "left" ? "md:flex-row-reverse" : "md:flex-row"
      } justify-end`}
    >
      <div className="md:w-[40vw] w-[80vw]  flex flex-col gap-1">
        <h2 className="md:text-3xl text-2xl md:text-left text-center text-orange">
          {title}
        </h2>
        <h2
          className={`md:text-base text-sm font-thin text-white font-special  md:text-left text-center`}
        >
          {year}
        </h2>
        <p className="text-white md:text-left text-center ">{description}</p>
        <div className="m-auto md:m-0  flex flex-row gap-2 mt-3 border w-fit border-gray-500 rounded-full p-3">
          {stack.map((skill, index) => {
            return <StackItem key={index} skill={skill} />;
          })}
        </div>
        <a
          href={link}
          className={`text-lg m-auto md:mx-0  flex gap-2 items-center text-cyan hover:text-orange transition-all duration-500 cursor-pointer justify-self-center mt-3 ${
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
