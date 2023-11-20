import styles from "./AboutMeContent.module.scss";
import Image from "next/image";
import List from "./AboutMeList/List";

const AboutMeContent = () => {
  return (
    <div className={styles.content}>
      <Image
        src="/avatar.jpg"
        width={250}
        height={250}
        alt="My picture"
        className={styles.image}
      />
      <List />
      <p className={styles.desc}>
        I have been learning programming for a year. I am friedly and calm
        person.
      </p>
    </div>
  );
};

export default AboutMeContent;
