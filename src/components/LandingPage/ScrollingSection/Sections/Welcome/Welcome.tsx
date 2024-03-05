import {
  MotionValue,
  motion,
  AnimatePresence,
  useTransform,
} from "framer-motion";
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
  const ySlide = useTransform(scrollProgress, [0.15, 0.25], [0, -200]);

  const isDisplayed = useScrollingElementsVisibility(
    0,
    0.25,
    setExitAnimation,
    true
  );

  return (
    <AnimatePresence>
      {isDisplayed && !exitAnimation && (
        <motion.div
          style={{
            y: ySlide,
          }}
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -600 }}
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

          <motion.header
            initial={{ opacity: 0, x: 600 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration: 0.5 }}
            className={styles.text_Content_HeaderBox}
          >
            <h1 className={styles.text_Content_HeaderBox_Header}>
              Front-end developer
            </h1>
          </motion.header>

          <motion.div
            transition={{
              type: "spring",
              duration: 1,
              stiffness: 50,
              delay: 0.3,
            }}
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            className={styles.text_Content_introduction}
          >
            <div className={styles.text_Content_introduction_text_content}>
              <p>
                {`I am glad to welcome you to my website. My name is Daniel and I would like to invite you to get to know me and my projects.`}
              </p>
              <p>{`Just click on one of the buttons and jump into my world`}</p>
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

          <Wave />
          <motion.div className={styles.whiteFiller}></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
