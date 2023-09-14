import { MotionValue, motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import styles from "./Welcome.module.scss";
import Image from "next/image";

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
      const windowHeight = window.innerHeight * 7;
      const scrollProgress = scrollY / windowHeight;

      if (scrollProgress >= 0.25) {
        setIsDisplayed(false);
      } else {
        setIsDisplayed(true);
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
              initial={{ opacity: 0, x: 400 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "tween" }}
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
                >
                  <ul className={styles.navigationBox}>
                    {["About me", "Projects", "Skills", "Contact"].map(
                      (el, index) => (
                        <motion.li
                          key={index}
                          style={{
                            fontSize: "3rem",
                          }}
                          className={styles.navigationBox_item}
                        >
                          {el}
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
