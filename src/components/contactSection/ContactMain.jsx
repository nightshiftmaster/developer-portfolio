import React from "react";
import { ContactLeft } from "./ContactLeft";
import { ContactRight } from "./ContactRight";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

export const ContactMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto px-4 items-center justify-center mt-[100px]"
    >
      <motion.h2
        className="text-6xl text-cyan mb-10 text-center"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        Contact Me
      </motion.h2>
      <motion.div
        className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row flex-col"
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <ContactLeft />
        <ContactRight />
      </motion.div>
    </div>
  );
};
