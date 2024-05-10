import { useParams } from "react-router-dom";
import { data } from "../../data/data";
import styles from "./ItemPage.module.css";

import DROP from "../../assets/olivedrop.png";
import STAR from "../../assets/star.svg";

export function ItemPage() {
  const { itemId } = useParams();

  const itemData = data.filter((olive) => itemId === olive.itemId);

  return (
    <div className={styles.itemPage}>
      <h2 className={styles.name}>{itemData[0].name}</h2>
      <p className={styles.brand}>{itemData[0].brand}</p>
      <div className={styles.grid}>
        <div>
          <img className={styles.olivePicture} src={itemData[0].image} />
        </div>
        <div>
          <p className={styles.review}>{itemData[0].review}</p>
          <p className={styles.reviewDate}>{itemData[0].reviewDate}</p>
          <p className={styles.rating}>
            Rating:
            <div className={styles.ratingNumber}> {itemData[0].rating} </div>
            <img className={styles.olivedrop} src={DROP} />
          </p>
          <div className={styles.addToFavourites}>
            <p>Add to favourites</p>
            <img src={STAR} />
          </div>
        </div>
      </div>
    </div>
  );
}
