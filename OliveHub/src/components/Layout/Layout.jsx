import { Outlet } from "react-router-dom";
import { TopBar } from "../TopBar/TopBar";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css";
// import { SearchContext } from "../../contexts/SearchContext";
// import { useState } from "react";

export function Layout() {
  return (
    <div className={styles.layout}>
      {/* <SearchContext.Provider value={{ search, handleSearchChange }}> */}
      <TopBar id={styles.topBar} />
      <div className={styles.content}>
        <Outlet />
      </div>
      <Footer />
      {/* </SearchContext.Provider> */}
    </div>
  );
}
