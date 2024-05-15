import { Link } from "react-router-dom";
import { FavouritesContext } from "../../contexts/FavouritesContext";
import styles from "../Explore/Explore.module.css";

import { use } from "react";
import { ArticleCover } from "../../components/ArticleCover/ArticleCover";

export function Favourites() {
  const { favourites } = use(FavouritesContext);
  return (
    <div>
      <div className={styles.listContainer}>
        {favourites.map((item) => (
          <div key={item.id} className={styles.list}>
            <Link to={`/${item.itemId}`}>
              <ArticleCover
                isMain={false}
                key={item.id}
                imgSource={item.image}
                oliveName={item.name}
                oliveBrand={item.brand}
                oliveRev={item.review.slice(0, 100)}
                oliveRating={item.rating}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
