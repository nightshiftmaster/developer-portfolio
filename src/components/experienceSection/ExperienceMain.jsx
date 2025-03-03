import React from "react";
import { ExperienceTop } from "./ExperienceTop";
import { ExperienceText } from "./ExperienceText";
import { AllExperience } from "./AllExperience";

export const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <ExperienceText />
      <ExperienceTop />
      <div className="w-full h-1 mt-4 bg-lightbrown lg:block sm:hidden"></div>
      <AllExperience />
    </div>
  );
};
