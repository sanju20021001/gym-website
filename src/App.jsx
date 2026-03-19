import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";     
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact"; 
import Footer from "./components/Footer"; 
import Hero from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;