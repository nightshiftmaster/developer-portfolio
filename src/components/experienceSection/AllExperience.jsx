import React from "react";
import { SingleExperience } from "./SingleExperience";

const experiences = [
  {
    job: "Full-Stack Developer / Freelancer",
    date: "2022 - Present",
    responsibilities: [
      ` Developed and deployed multiple Full-Stack applications, managing Front-End, Back End development and Database.`,
      ` Designed and implemented modern UI/UX, ensuring smooth and engaging user experience.`,
      `Built and optimized custom RESTful APIs and database queries to improve
application performance, reliability, and ensure smooth data flow between client and server.`,
      `Set up and maintained CI/CD pipelines to automate testing, deployment, and
code quality assurance, using Jest, React Testing Library, and Playwright for application stability and performance testing`,
    ],
  },
];

export const AllExperience = () => {
  return (
    <div>
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience experience={experience} />;
          </>
        );
      })}
    </div>
  );
};
