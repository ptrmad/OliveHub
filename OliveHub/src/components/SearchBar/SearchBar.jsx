import { useContext } from "react";
import styles from "./SearchBar.module.css";
import { SearchContext } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const { search, setSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newSearchTerm = search;
          console.log(newSearchTerm);
          navigate(`/explore`);
          ///${newSearchTerm}
        }}
      >
        <input
          placeholder="Search"
          className={styles.searchBar}
          onChange={(e) => {
            setSearch(e.target.value);
            console.log(e.target.value);
          }}
        />
      </form>
    </div>
  );
}
