import styles from "./ContactSection.module.scss";
import { BsDiscord } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
const ContactSection = () => {
  return (
    <section className={styles.container}>
      <h3 className={styles.header}>Contact</h3>
      <div className={styles.box}>
        <BsDiscord />
        <span>biszku</span>
      </div>
      <div className={styles.box}>
        <GrMail />
        <span>contact@biszku.dev</span>
        <span>
          {"Icons by "}
          <a href="https://icons8.com/" target="_blank">
            Icons8
          </a>
        </span>
      </div>
    </section>
  );
};

export default ContactSection;
