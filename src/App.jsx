"use client";
import { useScroll, useTransform } from "motion/react";
import { useState } from "react";
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { FadeSection } from "./components/FadeSection";
import { GeminiEffect } from "./components/GeminiEffect";
import './index.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  const pathLengthFirst = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`relative min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
      <div className="fixed top-1/2 left-0 w-full h-[445px] -translate-y-1/2 pointer-events-none opacity-10 z-0">
        <GeminiEffect
          pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
          ]}
        />
      </div>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <FadeSection rootMargin="0px 0px -100px 0px">
          <Home />
        </FadeSection>
        <FadeSection rootMargin="0px 0px -100px 0px">
          <About />
        </FadeSection>
        <FadeSection rootMargin="0px 0px -100px 0px">
          <Projects />
        </FadeSection>
        <FadeSection rootMargin="0px 0px -100px 0px">
          <Contact />
        </FadeSection>
      </div>
    </>
  );
}

export default App
