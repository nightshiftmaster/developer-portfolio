// import "./App.css";
import { AboutMeMain } from "./components/aboutMeSection/AboutMeMain";
import { ExperienceMain } from "./components/experienceSection/ExperienceMain";
import { HeroGradient } from "./components/heroSection/HeroGradient";
import { HeroMain } from "./components/heroSection/HeroMain";
import { SubheroSection } from "./components/heroSection/SubheroSection";
import { NavbarMain } from "./components/navbar/NavbarMain";
import { SkillsMain } from "./components/skillsSection/SkillsMain";
import { SubSkills } from "./components/skillsSection/SubSkills";

function App() {
  return (
    <main className="font-body overflow-x-hidden ">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubheroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
    </main>
  );
}

export default App;
