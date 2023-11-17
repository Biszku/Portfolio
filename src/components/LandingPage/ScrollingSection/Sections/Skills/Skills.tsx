import { MotionValue, motion, AnimatePresence } from "framer-motion";
import styles from "./Skills.module.scss";
import useScrollingElementsVisibility from "@/src/hooks/useScrollingElementsVisibility";
import { useEffect } from "react";

const Skills = ({
  scrollProgress,
  exitAnimation,
  setExitAnimation,
}: {
  scrollProgress: MotionValue<number>;
  exitAnimation: boolean;
  setExitAnimation: (state: boolean) => void;
}) => {
  const isDisplayed = useScrollingElementsVisibility(0.75, 2, setExitAnimation);

  return (
    <AnimatePresence>
      {isDisplayed && !exitAnimation && (
        <motion.article
          initial={{ opacity: 0, x: 600 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -600 }}
          className={styles.container}
          onAnimationComplete={() => {
            setExitAnimation(false);
          }}
        >
          <p>Skills</p>
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default Skills;
