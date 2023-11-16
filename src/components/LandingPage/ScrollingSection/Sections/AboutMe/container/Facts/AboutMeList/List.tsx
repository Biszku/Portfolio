import styles from "./List.module.scss";

const List = () => {
  return (
    <ol className={styles.list}>
      <li>
        <span>Name</span>: Daniel
      </li>
      <li>
        <span>Age</span>: 19
      </li>
      <li>
        <span>Gender</span>: Programmer
      </li>
      <li>
        <span>Country</span>: Poland
      </li>
      <li>
        <span>Description</span>: I have been learning programming for a year. I
        am friedly and calm person.
      </li>
    </ol>
  );
};

export default List;
