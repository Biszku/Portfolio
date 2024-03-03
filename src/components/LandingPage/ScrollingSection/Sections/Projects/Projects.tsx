import { MotionValue, motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.scss";
import useScrollingElementsVisibility from "@/src/hooks/useScrollingElementsVisibility";
import Card from "./Card/Card";

import {
  TypescriptIcon,
  SassIcon,
  ReactJsIcon,
  NextJsIcon,
  CssIcon,
} from "@/src/components/svgs";

const Projects = ({
  scrollProgress,
  exitAnimation,
  setExitAnimation,
}: {
  scrollProgress: MotionValue<number>;
  exitAnimation: boolean;
  setExitAnimation: (state: boolean) => void;
}) => {
  const isDisplayed = useScrollingElementsVisibility(
    0.5,
    0.75,
    setExitAnimation
  );
  const projectsInfo = [
    {
      name: "Events Website",
      image: "/events.PNG",
      resolution: {
        height: 991 / 3,
        width: 1904 / 3,
      },
      alt: "Events screenshot",
      description: "A site to buy tickets to various events at the best price",
      technologies: [
        { name: "React.js", icon: <ReactJsIcon /> },
        { name: "Sass", icon: <SassIcon /> },
      ],
      linkToLiveVersion: "https://biszku-project.vercel.app/",
      linkToGithub: "https://github.com/Biszku/Events-page-project",
    },
    {
      name: "Quiz App",
      image: "/quizio.PNG",
      resolution: {
        height: 811 * 2,
        width: 469 * 2,
      },
      alt: "Quiz App screenshot",
      description:
        "Quiz application to test your knowledge in various side of IT",
      technologies: [
        { name: "Next.js", icon: <NextJsIcon /> },
        { name: "Sass", icon: <SassIcon /> },
        { name: "CSS Modules", icon: <CssIcon /> },
      ],
      linkToLiveVersion: "https://quiz-io.vercel.app/",
      linkToGithub: "https://github.com/Biszku/QuizIo",
    },
    {
      name: "Chess",
      image: "/chess.PNG",
      resolution: {
        height: 991 / 3,
        width: 1920 / 3,
      },
      alt: "Chess App screenshot",
      description: "Just chess ♟",
      technologies: [{ name: "Vanilla TypeScript", icon: <TypescriptIcon /> }],
      linkToLiveVersion: "https://biszku-chess-game.vercel.app/",
      linkToGithub: "https://github.com/Biszku/vanilla-ts-chess-game",
    },
  ];

  return (
    <AnimatePresence>
      {isDisplayed && !exitAnimation && (
        <motion.article
          className={styles.container}
          exit={{
            opacity: 0,
            x: -600,
          }}
          onAnimationComplete={() => {
            setExitAnimation(false);
          }}
        >
          {projectsInfo.map((project, index) => (
            <Card key={index} info={project} numOfCard={index} />
          ))}
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default Projects;
