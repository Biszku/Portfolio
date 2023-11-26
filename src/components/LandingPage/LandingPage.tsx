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
      <footer className={styles.footer}>
        <span>
          {"Icons by "}
          <a href="https://icons8.com/" target="_blank">
            Icons8
          </a>
        </span>
      </footer>
    </main>
  );
};

export default LandingPage;
