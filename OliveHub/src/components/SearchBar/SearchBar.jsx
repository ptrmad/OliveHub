import { useContext } from "react";
import styles from "./SearchBar.module.css";
import { SearchContext } from "../../contexts/SearchContext";
import { useNavigate } from "react-router-dom";

export function SearchBar() {
  const { search, handleSearchChange } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleUpdateSearch = (newSearchTerm) => {
    handleSearchChange(newSearchTerm);

    navigate(`/explore?search=${newSearchTerm}`);
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          className={styles.searchBar}
          onChange={(e) => handleUpdateSearch(e.target.value)}
        />
      </form>
    </div>
  );
}
