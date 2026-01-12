import ScrollyCanvas from "./components/ScrollyCanvas";
import AboutSection from "./components/sections/AboutSection";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import ContactCTA from "./components/sections/ContactCTA";

export default function Home() {
  return (
    <main className="bg-[#121212]">
      <ScrollyCanvas />
      <div className="relative z-20 bg-[#0b0b0f]">
        <AboutSection />
        <TechStack />
        <Projects />
        <ContactCTA />
      </div>
    </main>
  );
}
