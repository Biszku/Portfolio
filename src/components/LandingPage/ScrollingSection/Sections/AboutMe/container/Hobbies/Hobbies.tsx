import Card from "../Card/Card";

const Hobbies = () => {
  const hobbyList = [
    "programming",
    "computer games",
    "listening music",
    "playing chess",
  ];
  return <Card header="Hobbies" list={hobbyList} />;
};

export default Hobbies;
