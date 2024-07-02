import "./App.css";
import About from "./components/About";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Intro />
      <Projects />
      {/* <About /> */}
    </>
  );
}

export default App;
