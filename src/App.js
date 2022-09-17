import NavBar from "./components/NavBar/Navbar";
import AboutSection from "./views/AboutSection/AboutSection";
import PresentationSection from "./views/PresentationSection/PresentationSection";
import SkillsSection from "./views/SkillsSection/SkillsSection";
import ContactSection from "./views/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <div className="App">
        <PresentationSection />
        <NavBar />
        <AboutSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
  );
}

export default App;
