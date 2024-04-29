import LANDSCAPE1 from "../../images/Landscape1.png";
import LANDSCAPE2 from "../../images/Landscape2.png";
import LANDSCAPE3 from "../../images/Landscape3.png";

import styles from "./Paralax.module.css";

export function Paralax() {
  return (
    <div>
      <div className={styles.paralaxplaceholder}></div>

      <div className={styles.paralax}>
        <img className={styles.landscape3} src={LANDSCAPE3} alt="" />
        <img className={styles.landscape2} src={LANDSCAPE2} alt="" />
        <img className={styles.landscape1} src={LANDSCAPE1} alt="" />
      </div>
    </div>
  );
}
