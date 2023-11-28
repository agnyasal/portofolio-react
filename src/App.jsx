import "./App.css";
import Navbar from "./components/navbar";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import AboutMe from "./components/About Me";

function App() {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
