import {
  motion,
  AnimatePresence,
  MotionValue,
  useTransform,
} from "framer-motion";
import styles from "./AboutMeContainer.module.scss";
import AboutMeContent from "./Facts/AboutMeContent";
import { useState } from "react";
import { MouseEvent } from "react";
import Hobbies from "./Hobbies/Hobbies";
import Skills from "./Skills/Skills";
import { CodingIcon, BulbIcon, ChessIcon } from "@/src/components/svgs";

const AboutMeSection = ({
  display,
  animationState,
  setExitAnimationState,
  scrollProgress,
}: {
  display: boolean;
  animationState: boolean;
  setExitAnimationState: (state: boolean) => void;
  scrollProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollProgress, [0.36, 0.5], [1, 1.2]);
  const opacity = useTransform(scrollProgress, [0.4, 0.5], [1, 0.8]);

  const [grab, setGrab] = useState(false);
  const [cords, setCords] = useState([0, 0]);

  const hanbleRotation = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    if (grab) {
      setCords((prev) => [prev[0] + e.movementX, prev[1] + e.movementY]);
    }
  };

  return (
    <AnimatePresence>
      {!animationState && display && (
        <motion.article
          exit={{ opacity: 0, scale: 2 }}
          className={styles.AboutMeSection}
          onAnimationComplete={() => {
            setExitAnimationState(false);
          }}
          style={{ scale, opacity }}
        >
          <motion.div
            className={styles.container}
            initial={{ opacity: 0, y: 600 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <motion.div
              className={styles.frontSide}
              style={{
                rotateY: cords[0] / 4,
                rotateX: cords[1] / 8,
              }}
            >
              <div className={styles.headerContainer}>
                <h2>About Me</h2>
              </div>
              <AboutMeContent />
            </motion.div>

            <motion.div
              className={styles.backSide}
              style={{
                rotateY: cords[0] / 4 - 180,
                rotateX: cords[1] / 8,
              }}
            >
              <div className={`${styles.headerContainer} ${styles.backHeader}`}>
                <h2>Soft Skills & Hobbies</h2>
              </div>
              <div className={styles.HobbiesAndSkillsBox}>
                <Skills />
                <Hobbies />
                <CodingIcon />
                <BulbIcon />
                <ChessIcon />
              </div>
            </motion.div>
            <div
              className={styles.divToRotateManipulation}
              style={{
                cursor: `${grab ? "grabbing" : "grab"}`,
              }}
              onMouseDown={(e) => {
                setGrab(true);
              }}
              onMouseUp={(e) => {
                setGrab(false);
              }}
              onMouseLeave={() => setGrab(false)}
              onMouseMove={(e) => {
                hanbleRotation(e);
              }}
            ></div>
          </motion.div>
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default AboutMeSection;
