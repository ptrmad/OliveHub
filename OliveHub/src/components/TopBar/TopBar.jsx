import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";
import styles from "./TopBar.module.css";

export function TopBar() {
  return (
    <div className={styles.topBar}>
      <NavBar />
      <Logo />
      <div className={styles.userIcons}>
        <Link to="favourites">Ikona ulubione</Link>
        <Link to="my-profile">Ikona profilu</Link>
      </div>
    </div>
  );
}
