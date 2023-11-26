import useScrollingElementsVisibility from "@/src/hooks/useScrollingElementsVisibility";
import AboutMeSection from "./container/AboutMeContainer";
import { MotionValue } from "framer-motion";

const AboutMe = ({
  scrollProgress,
  exitAnimation,
  setExitAnimation,
}: {
  scrollProgress: MotionValue<number>;
  exitAnimation: boolean;
  setExitAnimation: (state: boolean) => void;
}) => {
  const isDisplayed = useScrollingElementsVisibility(
    0.25,
    0.5,
    setExitAnimation
  );

  return (
    <AboutMeSection
      display={isDisplayed}
      animationState={exitAnimation}
      setExitAnimationState={setExitAnimation}
      scrollProgress={scrollProgress}
    />
  );
};

export default AboutMe;
