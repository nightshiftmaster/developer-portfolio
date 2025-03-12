import React from "react";
import { SkillsText } from "./SkillsText";
import { AllSkills } from "./AllSkills";
import { AllSkillsSm } from "./AllSkillsSm";
import { SubSkills } from "./SubSkills";

export const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] mx-auto px-4 min-h-[600px] relative overflow-hidden">
        <SkillsText />
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] hidden lg:block">
          <AllSkills />
        </div>
        <div className="block lg:hidden">
          <AllSkillsSm />
        </div>
      </div>
    </div>
  );
};
