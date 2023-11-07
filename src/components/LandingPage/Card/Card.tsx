import styles from "./Card.module.scss";
import { motion } from "framer-motion";

const Card = ({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
      className={styles.content}
    >
      <p className={styles.header}>{header}</p>
      <ol className={styles.list}>{children}</ol>
    </motion.div>
  );
};

export default Card;
