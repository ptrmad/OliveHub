import OLIVESKY from "../../images/OliveSky.jpg";
import OLIVEGARDEN from "../../images/OliveGarden.jpg";
import FRESHOLIVES from "../../images/FreshOlives.jpg";

import styles from "./Paralax.module.css";

export function Paralax({ children }) {
  return (
    <div className={styles.paralax}>
      <img className={styles.sky} src={OLIVESKY} alt="" />
      <img className={styles.ground} src={OLIVEGARDEN} alt="" />
      <img className={styles.front} src={FRESHOLIVES} alt="" />
      {children}
    </div>
  );
}
