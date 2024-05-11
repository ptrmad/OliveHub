import { useContext } from "react";
import styles from "./SearchBar.module.css";
import { SearchContext } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const { handleSearchChange } = useContext(SearchContext);

  return (
    <div>
      <form>
        <input
          onChange={(e) => handleSearchChange(e.target.value)}
          onSubmit={()}
          placeholder="Search"
          className={styles.searchBar}
        ></input>
      </form>
    </div>
  );
}
