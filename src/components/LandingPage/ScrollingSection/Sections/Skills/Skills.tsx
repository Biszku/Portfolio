import { MotionValue, motion, AnimatePresence } from "framer-motion";
import styles from "./Skills.module.scss";
import useScrollingElementsVisibility from "@/src/hooks/useScrollingElementsVisibility";
import {
  TypescriptIcon,
  JavascriptIcon,
  SassIcon,
  ReactJsIcon,
  NextJsIcon,
  CssIcon,
  HtmlIcon,
} from "@/src/components/svgs";
import SkillBox from "./SkillBox/SkillBox";

const Skills = ({
  scrollProgress,
  exitAnimation,
  setExitAnimation,
}: {
  scrollProgress: MotionValue<number>;
  exitAnimation: boolean;
  setExitAnimation: (state: boolean) => void;
}) => {
  const isDisplayed = useScrollingElementsVisibility(0.75, 2, setExitAnimation);
  const SkillsList = [
    { name: "HTML", icon: <HtmlIcon /> },
    { name: "CSS", icon: <CssIcon /> },
    { name: "Sass", icon: <SassIcon /> },
    { name: "JavaScript", icon: <JavascriptIcon /> },
    { name: "TypeScript", icon: <TypescriptIcon /> },
    { name: "React.js", icon: <ReactJsIcon /> },
    { name: "Next.js", icon: <NextJsIcon /> },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {isDisplayed && !exitAnimation && (
        <motion.article
          initial={{ opacity: 0, x: 600 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -600 }}
          className={styles.container}
          onAnimationComplete={() => {
            setExitAnimation(false);
          }}
        >
          <div className={styles.skillsContainer}>
            <h3 className={styles.header}>Skills</h3>
            <motion.div
              className={styles.skillsInnerContainer}
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {SkillsList.map((skillInfo, index) => {
                return <SkillBox key={index} skillInfo={skillInfo} />;
              })}
            </motion.div>
          </div>
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default Skills;
