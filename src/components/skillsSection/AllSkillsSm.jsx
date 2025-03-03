import { skills } from "../../assets/constants";

import React from "react";

export const AllSkillsSm = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <item.icon className="text-7xl text-orange" />
            <p className="tex-center mt-4 text-white">{item.skill}</p>
          </div>
        );
      })}
    </div>
  );
};
