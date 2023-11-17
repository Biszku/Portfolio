import { useState, useEffect } from "react";

const useScrollingElementsVisibility = (
  min: number,
  max: number,
  updateAnimationState: (value: boolean) => void,
  firstSection: boolean = false
) => {
  const [isVisible, setIsVisible] = useState(firstSection);
  const [isDisplayed, setIsDisplayed] = useState(firstSection);
  const [elementPrevDisplayed, isElementPrevDisplayed] = useState<
    null | boolean
  >(null);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight * 8;
      const scrollProgress = scrollY / windowHeight;

      if (scrollProgress >= min && scrollProgress < max) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [min, max, firstSection, isDisplayed]);

  useEffect(() => {
    if (!isFirstLoad) {
      const PrevDisplayed = !isVisible;
      setIsDisplayed(isVisible);
      if (!isVisible && PrevDisplayed) updateAnimationState(true);
      isElementPrevDisplayed(PrevDisplayed);
    }
    setIsFirstLoad(false);
  }, [isVisible]);

  return isDisplayed;
};

export default useScrollingElementsVisibility;
