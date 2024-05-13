import { FavouritesContext } from "../../contexts/FavouritesContext";
import { use } from "react";

export function Favourites() {
  const { favourites } = use(FavouritesContext);
  return (
    <div>
      <button onClick={() => console.log(favourites)}>
        AAAAAAAAAAAAAAAAAAAAA
      </button>
    </div>
  );
}
