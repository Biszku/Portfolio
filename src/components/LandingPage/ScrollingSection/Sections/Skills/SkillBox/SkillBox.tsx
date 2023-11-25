import { motion } from "framer-motion";
import styles from "./SkillBox.module.scss";

const SkillBox = ({
  skillInfo,
}: {
  skillInfo: { name: string; icon: JSX.Element };
}) => {
  const item = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      className={styles.skillBox}
      variants={item}
      whileHover={{
        y: -10,
      }}
    >
      {skillInfo.icon}
      <p>{skillInfo.name}</p>
    </motion.div>
  );
};

export default SkillBox;
