import useScrollingElementsVisibility from "@/src/hooks/useScrollingElementsVisibility";
import AboutMeSection from "./container/AboutMeContainer";

const AboutMe = () => {
  const isDisplayed = useScrollingElementsVisibility(0.25, 0.5);
  return <AboutMeSection display={isDisplayed} />;
};

export default AboutMe;
