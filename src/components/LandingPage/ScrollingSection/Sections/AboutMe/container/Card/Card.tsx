import styles from "./Card.module.scss";

const Card = ({ list }: { list: string[] }) => {
  return (
    <ol className={styles.list}>
      {list.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ol>
  );
};

export default Card;
