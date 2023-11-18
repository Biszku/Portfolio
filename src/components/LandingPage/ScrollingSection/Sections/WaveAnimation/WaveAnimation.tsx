import styles from "./WaveAnimation.module.scss";

const Wave = () => {
  return (
    <div className={styles.wavesContainer}>
      <div className={`${styles.wave} ${styles.wave1}`}></div>
      <div className={`${styles.wave} ${styles.wave2}`}></div>
      <div className={`${styles.wave} ${styles.wave3}`}></div>
    </div>
  );
};

export default Wave;
