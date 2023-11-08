import styles from "./Card.module.scss";
import { motion } from "framer-motion";

const Card = ({
  header,

  list,
}: {
  header: string;

  list: string[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
      className={styles.content}
    >
      <p className={styles.header}>{header}</p>
      <ol className={styles.list}>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </motion.div>
  );
};

export default Card;
