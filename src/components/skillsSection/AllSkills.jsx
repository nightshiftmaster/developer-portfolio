import React from "react";
import { skills } from "../../assets/constants";
import { SingleSkill } from "./SingleSkill";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

export const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px]">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
            >
              <SingleSkill key={index} text={item.skill} icon={<item.icon />} />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
