import About from "./components/About";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import FigmaMockups from "./components/FigmaMockups";

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <Projects />
      <FigmaMockups />
      <About />
      <Footer />
    </>
  );
}

export default App;
