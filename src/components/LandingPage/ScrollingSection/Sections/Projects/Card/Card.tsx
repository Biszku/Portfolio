import Image from "next/image";
import styles from "./Card.module.scss";
import { HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
const Card = ({
  info,
}: {
  info: {
    name: string;
    image: string;
    resolution: {
      height: number;
      width: number;
    };
    alt: string;
    description: string;
    technologies: string[];
    linkToLiveVersion: string;
    linkToGithub: string;
  };
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={info.image}
          height={info.resolution.height}
          width={info.resolution.width}
          alt={info.alt}
          className={styles.image}
        />
      </div>
      <p className={styles.description}>{info.description}</p>
      <div className={styles.infoContainer}>
        <p className={styles.technologiesHeader}>Technologies</p>
        <ol className={styles.list}>
          {info.technologies.map((tech, index) => (
            <li key={index}>
              <HiChevronRight />
              {tech}
            </li>
          ))}
        </ol>
        <div className={styles.buttonContainer}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href={info.linkToLiveVersion}
            className={styles.button}
          >
            Live Version
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href={info.linkToGithub}
            className={styles.button}
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Card;
