import React from "react";
import { ProjectsText } from "./ProjectsText";
import { projects } from "../../assets/constants";
import { SingleProject } from "./SingleProject";

export const ProjectsMain = () => {
  return (
    <div>
      <ProjectsText />
      <div>
        {projects.map((item, index) => {
          return <SingleProject key={index} {...item} />;
        })}
      </div>
    </div>
  );
};
