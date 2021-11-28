import styles from "./ColumnHead.module.css";

export default function ColumnHead({ provider, deal, logo }) {
  return (
    <div className={styles.columnHead}>
      <img className={styles.logo} src={logo} alt={provider} />
      <div className={styles.columnDetails}>
        <h3 className={styles.provider}>{provider}</h3>
        <p className={styles.deal}>{deal}</p>
      </div>
    </div>
  );
}
