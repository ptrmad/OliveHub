// import { ArticleCover } from "../../components/ArticleCover/ArticleCover";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";

export function Explore() {
  const { search } = useContext(SearchContext);
  return (
    <div>
      <SearchBar />
      <p>Tutaj wyniki: {search}</p>
    </div>
  );
}
