import { skills } from "../../assets/constants";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

import React from "react";

export const AllSkillsSm = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-12 my-12">
      {skills.map((item, index) => {
        return (
          <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.5 }}
            key={index}
            className="flex flex-col items-center"
          >
            <item.icon className="text-7xl text-orange" />
            <p className="tex-center mt-4 text-white">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};
