import LANDSCAPE1 from "../../images/Landscape1.png";
import LANDSCAPE2 from "../../images/Landscape2.png";
import LANDSCAPE3 from "../../images/Landscape3.png";
import { HomeRanking } from "../HomeRanking/HomeRanking";
// import { Logo } from "../Logo/Logo";
import { NewRev } from "../NewRev/NewRev";
// import OLIVES from "../../images/FreshOlives.jpg";

import styles from "./Paralax.module.css";

export function Paralax() {
  return (
    <div>
      <div className={styles.paralaxPlaceholder}></div>

      <div className={styles.paralax}>
        <img className={styles.landscape3} src={LANDSCAPE3} alt="" />
        <img className={styles.landscape2} src={LANDSCAPE2} alt="" />
        {/* <div className={styles.heading}>
          <Logo />
        </div> */}
        <img className={styles.landscape1} src={LANDSCAPE1} alt="" />

        <div className={styles.olives}>
          <div className={styles.gradient}>
            <NewRev />
          </div>
          <HomeRanking />
        </div>
      </div>
    </div>
  );
}
