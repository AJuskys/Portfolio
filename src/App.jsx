import NavMenu from "./components/navMenu/NavMenu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
