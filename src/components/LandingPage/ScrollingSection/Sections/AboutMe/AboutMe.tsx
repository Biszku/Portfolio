import { MotionValue, motion, AnimatePresence } from "framer-motion";

import { useState, useEffect } from "react";
import styles from "./AboutMe.module.scss";

const AboutMe = ({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight * 7;
      const scrollProgress = scrollY / windowHeight;

      if (scrollProgress >= 0.25 && scrollProgress <= 0.5) {
        setIsDisplayed(true);
      } else {
        setIsDisplayed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isDisplayed && (
        <motion.article
          initial={{ opacity: 0, x: 600 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.2 },
          }}
          exit={{ opacity: 0, x: -600 }}
          className={styles.container}
        >
          <p>About Me</p>
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default AboutMe;
