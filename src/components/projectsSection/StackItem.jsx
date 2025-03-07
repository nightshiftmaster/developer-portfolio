import React from "react";
import { skills } from "../../assets/constants";

export const StackItem = ({ skill }) => {
  return (
    <div className="text-lightcyan text-2xl">
      {skills.map((item) => {
        return item.skill === skill ? <item.icon /> : "";
      })}
    </div>
  );
};
