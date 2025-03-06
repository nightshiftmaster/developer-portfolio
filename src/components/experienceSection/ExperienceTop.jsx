import React from "react";
import { ExperienceTopLeft } from "./ExperienceTopLeft";
import { ExperienceTopMiddle } from "./ExperienceTopMiddle";
import { ExperienceTopRight } from "./ExperienceTopRight";
import { AllExperience } from "./AllExperience";

export const ExperienceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center ">
      {/* <ExperienceTopLeft /> */}

      <ExperienceTopMiddle />
      <AllExperience />
      {/* <ExperienceTopRight /> */}
    </div>
  );
};
