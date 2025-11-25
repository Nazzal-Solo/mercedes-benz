import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Models from "./components/Models";
import About from "./components/About";
import Innovation from "./components/Innovation";
import Heritage from "./components/Heritage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <Hero />
      <Models />
      <About />
      <Innovation />
      <Heritage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
