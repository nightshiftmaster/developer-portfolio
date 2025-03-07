import React from "react";
import { ProjectsText } from "./ProjectsText";
import { projects } from "../../assets/constants";
import { SingleProject } from "./SingleProject";

export const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4 ">
      <ProjectsText />
      <div className="flex flex-col gap-20 max-w-[1000px] mx-auto mt-12">
        {projects.map((item, index) => {
          return <SingleProject key={index} {...item} />;
        })}
      </div>
    </div>
  );
};
