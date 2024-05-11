import { createContext, useState } from "react";

export const SearchContext = createContext("Search");

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState("Search");

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  return (
    <SearchContext.Provider value={{ search, handleSearchChange }}>
      {children}
    </SearchContext.Provider>
  );
}
