import React from "react";

export const HeroGradient = () => {
  return (
    <div>
      <div className="shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10 animate-pulse"></div>
      <div className="shadow-orangeMediumShadow absolute top-0 right-0 -z-10 animate-pulse"></div>
      <div className="shadow-cyanMediumShadow absolute top-[300px] left-0 -z-10 animate-pulse opacity-50"></div>
      <div className="shadow-orangeMediumShadow absolute top-[500px] left-0 -z-10 animate-pulse opacity-50"></div>
    </div>
  );
};
