import { BsFillRocketFill } from "react-icons/bs";
import styles from "./ScrollToTop.module.scss";
import ScrollingToElement from "@/src/utils/scrolling";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = ({ rocketVisibility }: { rocketVisibility: boolean }) => {
  return (
    <AnimatePresence>
      {rocketVisibility && (
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -400 }}
          transition={{ type: "spring", duration: 1 }}
          whileHover={{ scale: 0.9 }}
          className={styles.container}
          onClick={() => ScrollingToElement(-1)}
        >
          <BsFillRocketFill className={styles.container_rocket} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
