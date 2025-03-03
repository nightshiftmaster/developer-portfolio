import React from "react";
import { skills } from "../../assets/constants";
import { SingleSkill } from "./SingleSkill";

export const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px]">
        {skills.map((item, index) => {
          return (
            <SingleSkill key={index} text={item.skill} icon={<item.icon />} />
          );
        })}
      </div>
    </div>
  );
};
