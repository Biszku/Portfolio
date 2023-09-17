import { useState, useEffect } from "react";

const useScrollingElementsVisibility = (
  min: number,
  max: number,
  firstSection: boolean = false
) => {
  const [isDisplayed, setIsDisplayed] = useState(firstSection);
  const [textElementVisibility, setTextElementVisibility] = useState(false);
  const [isVisibleNavigation, setIsVisibleNavigation] = useState(false);

  useEffect(() => {
    const textElementTimer = setTimeout(
      () => setTextElementVisibility(true),
      625
    );
    const navigationTimer = setTimeout(
      () => setIsVisibleNavigation(true),
      1000
    );
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight * 8;
      const scrollProgress = scrollY / windowHeight;

      if (scrollProgress >= min && scrollProgress < max) {
        setIsDisplayed(true);
      } else {
        setIsDisplayed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(textElementTimer);
      clearTimeout(navigationTimer);
      setIsDisplayed(false);
    };
  }, []);

  return [isDisplayed, textElementVisibility, isVisibleNavigation];
};

export default useScrollingElementsVisibility;
