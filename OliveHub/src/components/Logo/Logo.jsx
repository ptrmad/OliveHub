import OLIVE from "../../assets/olive.svg";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <div className={styles.logoContainer}>
        <p>Olive</p>
        <img src={OLIVE} />
        <p>Hub</p>
      </div>
    </div>
  );
}
