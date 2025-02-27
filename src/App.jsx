import "./App.css";
import { AboutMeMain } from "./components/aboutMeSection/AboutMeMain";
import { HeroGradient } from "./components/navbar/heroSection/HeroGradient";
import { HeroMain } from "./components/navbar/heroSection/HeroMain";
import { SubheroSection } from "./components/navbar/heroSection/SubheroSection";
import { NavbarMain } from "./components/navbar/NavbarMain";

function App() {
  return (
    <main className="font-body ">
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubheroSection />
      <AboutMeMain />
    </main>
  );
}

export default App;
