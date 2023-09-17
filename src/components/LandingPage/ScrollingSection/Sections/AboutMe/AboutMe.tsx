import {
  MotionValue,
  motion,
  AnimatePresence,
  useTransform,
} from "framer-motion";
import styles from "./AboutMe.module.scss";
import useScrollingElementsVisibility from "@/src/hooks/useScrollingElementsVisibility";

const AboutMe = ({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) => {
  const [isDisplayed] = useScrollingElementsVisibility(0.25, 0.5);
  const scale = useTransform(scrollProgress, [0.24, 0.5], [1, 10]);
  const opacity = useTransform(scrollProgress, [0.24, 0.5], [1, 0]);

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
          style={{
            scale: scale,
            opacity: opacity,
          }}
        >
          <p>About Me</p>
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default AboutMe;
