import React from "react";
import { links } from "../../assets/constants";

export const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightgrey mt-24 overflow-hidden"></div>
      <div className="md:flex hidden justify-between mt-10 max-w-[1200px] mx-auto">
        <p className="text-3xl text-lightgrey">Vlad Medvedev</p>
        <ul className="flex gap-4 text-lightgrey text-xl">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightbrown">
        © 2025 Vlad Medvedev | All Rights Reserved.
      </p>
    </div>
  );
};
