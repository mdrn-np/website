import Hero from "./components/hero/hero";
import ParticlesComponent from "./components/heroConfig/particles_Config";
import Projects from "./components/projects/projects";
import CardSection from "./components/cards/cardSection";
import Navbar from "./components/navbar/navbar";
import Timeline from "./components/timeline/timeline";
import Sponsers from "./components/sponsers/sponser";
import Footer from "./components/footer/footer";
import Members from "./components/members/members";
import TechStack from "./components/techstack/techstack";
import Testimonial from "./components/testimonials/testimonial";
import Cursor from "./components/customCursor/customCursor";

function App() {
  return (
    <>
      <Cursor/>
      <Navbar />
      <ParticlesComponent id="particles" />
      <Hero />
      <CardSection />
      <Members />
      <Projects />
      <Timeline />
      <Sponsers />
      <TechStack />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
