import { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Home from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeNav, setActiveNav] = useState("Home");

  const scrollTo = (section) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActiveNav(section);
  };

  return (
    <>
      <Header   activeNav={activeNav} onNavClick={scrollTo} />
      <Home     onScrollTo={scrollTo} />
      <About    onScrollTo={scrollTo} />
      <Gallery  onScrollTo={scrollTo} />
      <Testimonials />
      <Contact  />
      <Footer   onNavClick={scrollTo} />
    </>
  );
}