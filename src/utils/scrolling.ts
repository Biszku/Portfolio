const ScrollingToElement = (index: number) => {
  window.scrollTo({
    top: window.innerHeight * 2 * (index + 1), // 200vh od góry
    behavior: "smooth",
  });
};

export default ScrollingToElement;
