import styles from "./Comparison.module.css";
import Button from "@mui/material/Button";

export default function Comparison({
  name,
  description,
  logo,
  deal_id,
  removeDeal,
}) {
  return (
    <div className={styles.comparison}>
      <img className={styles.logo} src={logo} alt={name} />
      <div className={styles.deal}>
        <h6>{name}</h6>
        <p>{description}</p>
      </div>
      <Button
        className={styles.deleteButton}
        onClick={() => removeDeal(deal_id)}
        variant="text"
      >
        ×
      </Button>
    </div>
  );
}
