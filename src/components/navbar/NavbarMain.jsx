import React, { useState, useRef, useEffect } from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";
import { NavbarBtn } from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="max-w-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2"
      ref={navRef}
    >
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center px-6 py-3 rounded-full border-[0.5px] border-orange">
        <NavbarLogo />
        <div
          className={`${isOpen ? "sm:block" : "sm:hidden"} lg:block`}
          onClick={() => setIsOpen(!open)}
        >
          <NavbarLinks setIsOpen={setIsOpen} isOpen={isOpen} />
        </div>
        <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-5 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
        <button
          className="text-xl p-2 border border-orange rounded-full text-white"
          type="button"
          onClick={toggle}
        >
          <GiHamburgerMenu className="text-white text-sm cursor-pointer" />
        </button>
      </div>
    </nav>
  );
};
