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

  useEffect(() => {
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
    };
  }, []);

  return (
    <AnimatePresence>
      {isDisplayed && (
        <motion.article
          exit={{ opacity: 0, x: -600 }}
          className={styles.container}
        >
          <Image
            src="/avatar.jpg"
            width={300}
            height={300}
            alt="Biszku's avatar"
            className={styles.container_image}
          />
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
