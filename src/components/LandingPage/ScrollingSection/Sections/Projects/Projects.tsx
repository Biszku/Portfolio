import { MotionValue, motion, AnimatePresence } from "framer-motion";
import styles from "./Projects.module.scss";
import useScrollingElementsVisibility from "@/src/hooks/useScrollingElementsVisibility";
import Card from "./Card/Card";
import {
  IoLogoCss3,
  IoLogoSass,
  IoLogoReact,
  IoLogoVercel,
  IoLogoJavascript,
} from "react-icons/io5";

const Projects = ({
  scrollProgress,
}: {
  scrollProgress: MotionValue<number>;
}) => {
  const isDisplayed = useScrollingElementsVisibility(0.5, 0.75);
  const projectsInfo = [
    {
      name: "Events Website",
      image: "/events.PNG",
      resolution: {
        height: (991 * 2) / 3,
        width: (1904 * 2) / 3,
      },
      alt: "Events screenshot",
      description: "A site to buy tickets to various events at the best price",
      technologies: [
        { name: "React.js", icon: <IoLogoReact /> },
        { name: "Sass", icon: <IoLogoSass /> },
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
        { name: "Next.js", icon: <IoLogoVercel /> },
        { name: "Sass", icon: <IoLogoSass /> },
        { name: "CSS Modules", icon: <IoLogoCss3 /> },
      ],
      linkToLiveVersion: "https://quiz-io.vercel.app/",
      linkToGithub: "https://github.com/Biszku/QuizIo",
    },
    {
      name: "Chess",
      image: "/chess.PNG",
      resolution: {
        height: (991 * 2) / 3,
        width: (1920 * 2) / 3,
      },
      alt: "Chess App screenshot",
      description: "Just chess :)",
      technologies: [
        { name: "Vanilla TypeScript", icon: <IoLogoJavascript /> },
      ],
      linkToLiveVersion: "https://biszku-chess-game.vercel.app/",
      linkToGithub: "https://github.com/Biszku/vanilla-ts-chess-game",
    },
  ];

  return (
    <AnimatePresence>
      {isDisplayed && (
        <motion.article
          initial={{ opacity: 0, x: 600 }}
          animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
          exit={{ opacity: 0, x: -600 }}
          className={styles.container}
        >
          {projectsInfo.map((project, index) => (
            <Card key={index} info={project} />
          ))}
        </motion.article>
      )}
    </AnimatePresence>
  );
};

export default Projects;
