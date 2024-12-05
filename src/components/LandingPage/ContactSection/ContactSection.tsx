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
        <a href="mailto:daniel.bivhuniak@gmail.com">daniel.bivhuniak@gmail.com</a>
      </div>
    </section>
  );
};

export default ContactSection;
