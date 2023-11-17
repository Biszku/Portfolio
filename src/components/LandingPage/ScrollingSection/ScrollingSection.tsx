"use client";
import styles from "./ScrollingSection.module.scss";
import { useRef, useState } from "react";
import { useScroll } from "framer-motion";
import Welcome from "./Sections/Welcome/Welcome";
import AboutMe from "./Sections/AboutMe/AboutMe";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";

const ScrollingSection = () => {
  const [isExitAnimation, setIsExitAnimation] = useState(false);
  const SectionsContainer = useRef(null);
  const { scrollYProgress } = useScroll({ target: SectionsContainer });

  return (
    <section ref={SectionsContainer} className={styles.container}>
      {[Welcome, AboutMe, Projects, Skills].map((Component, index) => (
        <Component
          key={index}
          scrollProgress={scrollYProgress}
          exitAnimation={isExitAnimation}
          setExitAnimation={(state) => setIsExitAnimation(() => state)}
        />
      ))}
    </section>
  );
};

export default ScrollingSection;
