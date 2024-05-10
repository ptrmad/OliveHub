import styles from "./SearchBar.module.css";

export function SearchBar() {
  return (
    <div>
      <form>
        <input placeholder="Search" className={styles.searchBar}></input>
      </form>
    </div>
  );
}
