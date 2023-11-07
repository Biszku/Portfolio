import { motion, AnimatePresence } from "framer-motion";
import styles from "./AboutMeContainer.module.scss";
import AboutMeContent from "./Facts/AboutMeContent";
import Hobbies from "./Hobbies/Hobbies";
import Skills from "./Skills/Skills";

const AboutMeSection = ({ display }: { display: boolean }) => {
  return (
    <AnimatePresence>
      {display && (
        <motion.article
          initial={{ opacity: 0, y: 600 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.3 },
          }}
          exit={{ opacity: 0, x: -600 }}
          className={styles.AboutMeSection}
        >
          <div className={styles.container}>
            <div className={styles.headerContainer}>
              <h1>About Me</h1>
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
