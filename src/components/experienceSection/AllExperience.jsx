import React from "react";
import { SingleExperience } from "./SingleExperience";

export const experiences = [
  {
    job: "BIDZ Influencer Marketplace ",
    title: "Full-Stack Developer",
    date: "2025 - Present",
    responsibilities: [
      `Developed new features and UI components to enhance the user interface.`,
      `Optimized existing functionality for better application performance and responsiveness.`,
      `Troubleshot and resolved technical issues to ensure application stability
`,
      `Collaborated with developers and designers on UI/UX and functional improvements`,
      `Contributed to front-end, back-end, and database development, providing comprehensive full-stack solutions`,
      `Used GitHub for version control and branch management, working in a CI/CD pipeline with GitHub Actions to automate tests and deployments`,
    ],
  },
  {
    job: "Freelancer",
    title: "Full-Stack Developer",
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
          <div key={index}>
            <SingleExperience experience={experience} />;
          </div>
        );
      })}
    </div>
  );
};
