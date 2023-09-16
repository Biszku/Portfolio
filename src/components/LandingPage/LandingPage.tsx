"use client";
import ContactSection from "./ContactSection/ContactSection";
import ScrollingSection from "./ScrollingSection/ScrollingSection";
import styles from "./LandingPage.module.scss";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import { useState, useEffect } from "react";

const LandingPage = () => {
  const [isScrollingRocketVisible, setIsScrollingRocketVisible] =
    useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= window.innerHeight * 2) {
        setIsScrollingRocketVisible(true);
      } else {
        setIsScrollingRocketVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className={styles.container}>
      <ScrollingSection />
      <ContactSection />
      <ScrollToTop rocketVisibility={isScrollingRocketVisible} />
    </main>
  );
};

export default LandingPage;
