import Hero from "./components/hero/hero";
import ParticlesComponent from "./components/heroConfig/particles_Config";
import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <NavBar />
      <ParticlesComponent id="particles"/>
      <Hero/>
    </>
  );
}

export default App;