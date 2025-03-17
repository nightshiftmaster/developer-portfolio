import { TypeAnimation } from "react-type-animation";

export const TitleAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "Front-End Developer",
        2000,
        "Back-End Developer",
        2000,
        "Full-Stack Developer",
        2000,
      ]}
      wrapper="p"
      speed={50}
      // className="lg:text-2xl sm:text-xl uppercase text-cyan"
      // style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
