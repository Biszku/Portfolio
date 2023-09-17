import { MotionValue, motion, AnimatePresence } from "framer-motion";

import styles from "./Projects.module.scss";
import useScrollingElementsVisibility from "@/src/hooks/useScrollingElementsVisibility";

const Projects = ({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) => {
  const [isDisplayed] = useScrollingElementsVisibility(0.5, 0.75);

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
