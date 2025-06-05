import React from "react";

export const SingleExperience = ({ experience }) => {
  return (
    <div className="md:w-[80%] w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-10">
      <div className="flex flex-col gap-2 mb-3">
        <p className="font-bold text-cyan text-center md:text-3xl text-2xl">
          {experience.job}
        </p>
        <h2 className="md:text-xl text-base  text-center text-orange">
          {experience.title}
        </h2>
      </div>
      <p className="text-lightgrey text-center">{experience.date}</p>
      <ul className="list-disc mt-4 text-white">
        {experience.responsibilities.map((resp, index) => {
          return <li key={index}>{resp}</li>;
        })}
      </ul>
    </div>
  );
};
