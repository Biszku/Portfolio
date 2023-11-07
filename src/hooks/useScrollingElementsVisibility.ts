import { useState, useEffect } from "react";

const useScrollingElementsVisibility = (
  min: number,
  max: number,
  firstSection: boolean = false
) => {
  const [isDisplayed, setIsDisplayed] = useState(firstSection);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight * 7;
      const scrollProgress = scrollY / windowHeight;
      console.log(scrollProgress);

      if (scrollProgress >= min && scrollProgress < max) {
        setIsDisplayed(true);
      } else {
        setIsDisplayed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [min, max, firstSection]);

  return isDisplayed;
};

export default useScrollingElementsVisibility;
