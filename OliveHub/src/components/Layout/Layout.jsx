import { Outlet } from "react-router-dom";
import { TopBar } from "../TopBar/TopBar";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css";
import { FavouritesContext } from "../../contexts/FavouritesContext";
import { useState } from "react";

export function Layout() {
  const [favourites, setFavourites] = useState(["test"]);

  return (
    <div className={styles.layout}>
      <FavouritesContext value={{ favourites, setFavourites }}>
        <TopBar id={styles.topBar} />
        <div className={styles.content}>
          <Outlet />
        </div>
        <Footer />
      </FavouritesContext>
    </div>
  );
}
