import React from "react";
import { SkillsText } from "./SkillsText";
import { AllSkills } from "./AllSkills";
import { AllSkillsSm } from "./AllSkillsSm";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

export const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] mx-auto px-4 min-h-[600px] relative overflow-hidden">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
        >
          <SkillsText />
        </motion.div>
        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] hidden lg:block">
          <AllSkills />
        </div>
        <div className="block lg:hidden">
          <AllSkillsSm />
        </div>
      </div>
    </div>
  );
};
