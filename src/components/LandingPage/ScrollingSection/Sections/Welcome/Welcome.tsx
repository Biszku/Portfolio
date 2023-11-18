import { MotionValue, motion, AnimatePresence } from "framer-motion";
import styles from "./Welcome.module.scss";
import Image from "next/image";
import ScrollingToElement from "@/src/utils/scrolling";
import useScrollingElementsVisibility from "@/src/hooks/useScrollingElementsVisibility";
import { useState, useEffect } from "react";
import Wave from "../WaveAnimation/WaveAnimation";

const Welcome = ({
  scrollProgress,
  exitAnimation,
  setExitAnimation,
}: {
  scrollProgress: MotionValue<number>;
  exitAnimation: boolean;
  setExitAnimation: (state: boolean) => void;
}) => {
  const isDisplayed = useScrollingElementsVisibility(
    0,
    0.25,
    setExitAnimation,
    true
  );
  const [textElementVisibility, setTextElementVisibility] = useState(false);
  const [isVisibleNavigation, setIsVisibleNavigation] = useState(false);

  useEffect(() => {
    const textElementTimer = setTimeout(
      () => setTextElementVisibility(true),
      325
    );

    const navigationTimer = setTimeout(() => setIsVisibleNavigation(true), 600);

    return () => {
      clearTimeout(textElementTimer);
      clearTimeout(navigationTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isDisplayed && !exitAnimation && (
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 600 }}
          className={styles.container}
          onAnimationComplete={() => {
            setExitAnimation(false);
          }}
        >
          <motion.article
            layout
            className={styles.container_avatar}
            animate={{
              boxShadow: [
                "none",
                "0px 0px 68px 23px rgba(225, 201, 182, 0.33)",
                "none",
              ],
              transition: {
                repeat: Infinity,
                duration: 2,
                delay: 2,
                repeatDelay: 5,
              },
            }}
          >
            <Image
              src="/avatar.jpg"
              width={600}
              height={600}
              alt="Biszku's avatar"
              className={styles.container_avatar_avatar}
            />
          </motion.article>

          {textElementVisibility && (
            <motion.article
              initial={{ opacity: 0, x: 600 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "tween", duration: 0.3 }}
              className={styles.text_Content}
            >
              <motion.header layout className={styles.text_Content_HeaderBox}>
                <h1 className={styles.text_Content_HeaderBox_Header}>
                  Welcome to my website
                </h1>
              </motion.header>
              {isVisibleNavigation && (
                <motion.div
                  transition={{ type: "spring", duration: 1, stiffness: 50 }}
                  initial={{ opacity: 0, x: 400 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={styles.text_Content_introduction}
                >
                  <div
                    className={styles.text_Content_introduction_text_content}
                  >
                    <p>
                      {`I'm glad you visited my website. My name is Daniel and I
                    have been learning front end programming for a year.`}
                    </p>
                    <p> Click on the links below to learn more about me.</p>
                  </div>
                  <ul className={styles.navigationBox}>
                    {["About me", "Projects", "Skills", "Contact"].map(
                      (el, index) => (
                        <motion.li
                          key={index}
                          className={styles.navigationBox_item}
                          onClick={() => ScrollingToElement(index)}
                        >
                          <a href="#">{el}</a>
                        </motion.li>
                      )
                    )}
                  </ul>
                </motion.div>
              )}
            </motion.article>
          )}
          <Wave />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
