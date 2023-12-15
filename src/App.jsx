import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Why from "./components/Why";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Why />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
