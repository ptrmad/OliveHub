import { Outlet } from "react-router-dom";
import { TopBar } from "../TopBar/TopBar";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles.layout}>
      <TopBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
