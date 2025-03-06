import React from "react";
import { ExperienceInfo } from "./ExperienceInfo";

export const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      {/* <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p> */}
      <div className="flex justify-center items-center gap-4">
        {/* <ExperienceInfo number="4" text="years" /> */}
        {/* <p className="font-bold text-6xl text-lightbrown">-</p> */}
        <ExperienceInfo number="7" text="projects" />
      </div>
      <p className="text-white text-center">
        With experience building dynamic and user-friendly applications
      </p>
    </div>
  );
};
