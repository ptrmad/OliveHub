// import { ArticleCover } from "../../components/ArticleCover/ArticleCover";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { SearchContext } from "../../contexts/SearchContext";
import { useContext } from "react";
import { data } from "../../data/data";

export function Explore() {
  const { search } = useContext(SearchContext);
  const searchResults = data.filter((item) => {
    item.name.includes(search) || item.brand.includes(search);
  });

  return (
    <div>
      <SearchBar />
      <p>Tutaj wyniki: {search}</p>
      <p>{searchResults.map((item) => item.name)}</p>
    </div>
  );
}
