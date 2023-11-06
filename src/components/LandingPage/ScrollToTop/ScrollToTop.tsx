"use client";
import { BsFillRocketFill } from "react-icons/bs";
import styles from "./ScrollToTop.module.scss";
import ScrollingToElement from "@/src/utils/scrolling";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isScrollingRocketVisible, setIsScrollingRocketVisible] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY >= window.innerHeight * 2) {
        setIsScrollingRocketVisible(true);
      } else {
        console.log("unvisible");
        setIsScrollingRocketVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isScrollingRocketVisible && (
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -400 }}
          transition={{ type: "tween" }}
          whileHover={{ scale: 0.9 }}
          className={styles.container}
          onClick={() => ScrollingToElement(-1)}
        >
          <BsFillRocketFill className={styles.container_rocket} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
