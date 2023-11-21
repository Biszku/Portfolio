import Card from "../Card/Card";

const Skills = () => {
  const skillList = [
    "Problem-solving",
    "Work under stress",
    "Analytical thinking",
    "Communication",
    "Teamwork",
    "Interpersonal Skills",
    "Time Management",
  ];
  return <Card list={skillList} />;
};

export default Skills;
