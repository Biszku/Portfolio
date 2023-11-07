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
    </div>
  );
};

export default AboutMeContent;
