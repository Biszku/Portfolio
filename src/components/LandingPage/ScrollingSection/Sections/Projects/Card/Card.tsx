import Image from "next/image";
import styles from "./Card.module.scss";
import { HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io5";

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
    technologies: {
      name: string;
      icon: any;
    }[];
    linkToLiveVersion: string;
    linkToGithub: string;
  };
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={info.image}
          height={info.resolution.height / 2}
          width={info.resolution.width / 2}
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
              {tech.icon}
              {tech.name}
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
            <div className={styles.dot}></div>
            Live Version
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            target="_blank"
            href={info.linkToGithub}
            className={styles.button}
          >
            GitHub
            <IoLogoGithub className={styles.gitIcon} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Card;
