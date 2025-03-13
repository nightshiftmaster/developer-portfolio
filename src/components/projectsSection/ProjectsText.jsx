import React from "react";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

export const ProjectsText = () => {
  return (
    <div className="flex flex-col items-center mt-[100px]">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="text-6xl text-cyan mb-10"
      >
        Projects
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="text-lg text-center text-white"
      >
        I have worked on a variety of web development projects, ranging from
        responsive websites for small businesses to full-stack applications and
        complex front-end interfaces.
      </motion.p>
    </div>
  );
};
