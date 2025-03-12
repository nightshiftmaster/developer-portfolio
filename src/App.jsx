// import "./App.css";
import { AboutMeMain } from "./components/aboutMeSection/AboutMeMain";
import { ContactMain } from "./components/contactSection/ContactMain";
import { ExperienceMain } from "./components/experienceSection/ExperienceMain";
import { FooterMain } from "./components/footer/FooterMain";
import { HeroGradient } from "./components/heroSection/HeroGradient";
import { HeroMain } from "./components/heroSection/HeroMain";
import { SubheroSection } from "./components/heroSection/SubheroSection";
import { NavbarMain } from "./components/navbar/NavbarMain";
import { ProjectsMain } from "./components/projectsSection/ProjectsMain";
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
      <ProjectsMain />
      <ContactMain />
      <FooterMain />
    </main>
  );
}

export default App;
