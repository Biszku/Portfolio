import { MotionValue, motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./Welcome.module.scss";
import Image from "next/image";
import ScrollingToElement from "@/src/utils/scrolling";

const Welcome = ({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) => {
  const [isDisplayed, setIsDisplayed] = useState(true);
  const [textElementVisibility, setTextElementVisibility] = useState(false);
  const [isVisibleNavigation, setIsVisibleNavigation] = useState(false);

  useEffect(() => {
    const textElementTimer = setTimeout(
      () => setTextElementVisibility(true),
      625
    );
    const navigationTimer = setTimeout(
      () => setIsVisibleNavigation(true),
      1000
    );
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight * 8;
      const scrollProgress = scrollY / windowHeight;

      if (scrollProgress < 0.25) {
        setIsDisplayed(true);
      } else {
        setIsDisplayed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(textElementTimer);
      clearTimeout(navigationTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isDisplayed && (
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -600 }}
          className={styles.container}
        >
          <motion.article layout className={styles.container_avatar}>
            <Image
              src="/avatar.jpg"
              width={300}
              height={300}
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
                    <p> Click on the links below to learn more about me</p>
                  </div>
                  <ul className={styles.navigationBox}>
                    {["About me", "Projects", "Skills", "Contact"].map(
                      (el, index) => (
                        <motion.li
                          key={index}
                          style={{
                            fontSize: "3rem",
                          }}
                          className={styles.navigationBox_item}
                          transition={{ type: "spring" }}
                          whileHover={{
                            scale: 1.1,
                            backgroundImage:
                              "linear-gradient(to right bottom,rgb(17, 17, 131),rgb(121, 14, 14))",
                          }}
                          onClick={() => ScrollingToElement(index)}
                        >
                          <span>{el}</span>
                        </motion.li>
                      )
                    )}
                  </ul>
                </motion.div>
              )}
            </motion.article>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
