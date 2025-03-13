import React from "react";
import { Link } from "react-scroll";

export const NavbarLogo = () => {
  return (
    <div>
      <Link to="hero" smooth={true} spy={true} duration={500} offset={-130}>
        <h1 className="text-white text-2xl sm:hidden md:block cursor-pointer">
          Vlad Medvedev
        </h1>
      </Link>
      <Link to="hero" smooth={true} spy={true} duration={500} offset={-130}>
        <h1 className="text-white font-special font-extrabold text-4xl sm:block md:hidden cursor-pointer">
          VM
        </h1>
      </Link>
    </div>
  );
};
