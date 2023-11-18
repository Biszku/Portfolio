import styles from "./Card.module.scss";

const Card = ({
  header,

  list,
}: {
  header: string;

  list: string[];
}) => {
  return (
    <div className={styles.content}>
      <p className={styles.header}>{header}</p>
      <ol className={styles.list}>
        {list.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ol>
    </div>
  );
};

export default Card;
