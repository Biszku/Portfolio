import { motion, AnimatePresence, animateValue } from "framer-motion";
import styles from "./AboutMeContainer.module.scss";
import AboutMeContent from "./Facts/AboutMeContent";
import Hobbies from "./Hobbies/Hobbies";
import Skills from "./Skills/Skills";

const AboutMeSection = ({
  display,
  animationState,
  setExitAnimationState,
}: {
  display: boolean;
  animationState: boolean;
  setExitAnimationState: (state: boolean) => void;
}) => {
  // console.log(display, animationState);
  return (
    <AnimatePresence>
      {!animationState && display && (
        <motion.article
          initial={{ opacity: 0, y: 600 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{ opacity: 0, x: -600 }}
          className={styles.AboutMeSection}
          onAnimationComplete={() => {
            setExitAnimationState(false);
          }}
        >
          <div className={styles.container}>
            <div className={styles.headerContainer}>
              <h2>About Me</h2>
            </div>
            <AboutMeContent />
            <Hobbies />
            <Skills />
          </div>
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default AboutMeSection;
