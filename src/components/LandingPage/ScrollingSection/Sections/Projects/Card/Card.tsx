import Image from "next/image";
import styles from "./Card.module.scss";
import { motion } from "framer-motion";
import { IoLogoGithub } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";

const Card = ({
  info,
  numOfCard,
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
  numOfCard: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 600 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: numOfCard * 0.3,
          type: "spring",
          stiffness: 80,
          damping: 10,
        },
      }}
      className={styles.container}
    >
      <div className={styles.imageContainer}>
        <Image
          src={info.image}
          height={info.resolution.height}
          width={info.resolution.width}
          alt={info.alt}
          className={styles.image}
        />
        <div className={styles.glassEffect}></div>
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
            transition={{ type: "spring" }}
            target="_blank"
            href={info.linkToGithub}
            className={styles.button}
          >
            GitHub
            <IoLogoGithub className={styles.gitIcon} />
          </motion.a>
        </div>
        <a
          href={info.linkToLiveVersion}
          target="_blank"
          className={styles.buttonToWebsite}
        >
          <HiOutlineExternalLink />
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
