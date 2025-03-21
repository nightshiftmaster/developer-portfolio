import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

export const NavbarBtn = () => {
  return (
    <a
      href="/images/VLAD_FRONTEND.pdf"
      download
      className="px-4 py-2 rounded-full text-xl  text-white border-cyan border flex items-center gap-1 font-bold bg-gradient-to-r from-cyan to-orange hover:scale-110 hover:border-orange transition-all duration-500 hover:shadow-cyanShadow"
    >
      <p className="text-sm md:text-xl text-center"> Download CV</p>

      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </a>
  );
};
