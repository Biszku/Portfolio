import ContactSection from "./ContactSection/ContactSection";
import ScrollingSection from "./ScrollingSection/ScrollingSection";
import styles from "./LandingPage.module.scss";
import ScrollToTop from "./ScrollToTop/ScrollToTop";

const LandingPage = () => {
  return (
    <main className={styles.container}>
      <ScrollingSection />
      <ContactSection />
      <ScrollToTop />
    </main>
  );
};

export default LandingPage;
