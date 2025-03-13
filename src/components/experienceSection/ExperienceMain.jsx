import React from "react";
import { ExperienceTopMiddle } from "./ExperienceTopMiddle";
import { ExperienceText } from "./ExperienceText";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";
import { AllExperience } from "./AllExperience";

export const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        className="flex flex-col items-center mt-[100px]"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
      >
        <ExperienceText />
      </motion.div>

      <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center ">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}
        >
          <ExperienceTopMiddle />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <AllExperience />
        </motion.div>
      </div>
      <div className="w-full h-1 mt-4 bg-lightbrown lg:block sm:hidden"></div>
      {/* <AllExperience /> */}
    </div>
  );
};
