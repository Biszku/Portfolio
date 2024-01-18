import styles from "./List.module.scss";

const List = () => {
  return (
    <ol className={styles.list}>
      <li>
        <span>Name</span>: Daniel
      </li>
      <li>
        <span>Age</span>: 20
      </li>
      <li>
        <span>Gender</span>: Programmer
      </li>
      <li>
        <span>Country</span>: Poland
      </li>
    </ol>
  );
};

export default List;
