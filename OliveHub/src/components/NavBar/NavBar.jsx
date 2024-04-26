import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <div className={styles.NavBar}>
      <NavLink to="home">Home</NavLink>
      <NavLink to="ranking">Ranking</NavLink>
      <NavLink to="explore">Explore</NavLink>
    </div>
  );
}
