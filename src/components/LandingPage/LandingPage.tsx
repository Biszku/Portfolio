import ContactSection from "./ContactSection/ContactSection";
import ScrollingSection from "./ScrollingSection/ScrollingSection";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
  return (
    <main className={styles.container}>
      <ScrollingSection />
      <ContactSection />
    </main>
  );
};

export default LandingPage;
