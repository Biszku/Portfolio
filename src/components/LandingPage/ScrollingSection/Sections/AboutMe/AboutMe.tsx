import useScrollingElementsVisibility from "@/src/hooks/useScrollingElementsVisibility";
import AboutMeSection from "./container/AboutMeContainer";
import { MotionValue } from "framer-motion";

const AboutMe = ({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) => {
  const isDisplayed = useScrollingElementsVisibility(0.25, 0.5);
  return <AboutMeSection display={isDisplayed} />;
};

export default AboutMe;
