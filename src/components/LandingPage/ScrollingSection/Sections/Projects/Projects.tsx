import { MotionValue, motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Projects.module.scss";

const Projects = ({
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

      if (scrollProgress >= 0.5 && scrollProgress <= 0.75) {
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
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -600 }}
          className={styles.container}
        >
          <p>Projects</p>
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default Projects;
