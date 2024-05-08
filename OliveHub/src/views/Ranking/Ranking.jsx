import FIRST from "../../assets/1stplace.svg";
import SECOND from "../../assets/2ndplace.svg";
import THIRD from "../../assets/3rdplace.svg";

import { data } from "../../data/data";
import { HomeRankingItem } from "../../components/HomeRankingItem/HomeRankingItem";
import styles from "./Ranking.module.css";
import { Pagination } from "../../components/Pagination/Pagination";
export function Ranking() {
  const sortedData = data.sort((a, b) => b.rating - a.rating).slice(0, 30);

  return (
    <div className={styles.ranking}>
      <h2>The Best Olive Oils</h2>
      {sortedData.map((item, index) => (
        <div key={item.id} className={styles.podium}>
          <p className={styles.place}>{index + 1}</p>

          {index < 3 && (
            <img className={styles.award} src={[FIRST, SECOND, THIRD][index]} />
          )}
          <HomeRankingItem
            key={item.id}
            imgSource={item.image}
            oliveName={item.name}
            oliveBrand={item.brand}
            oliveRating={item.rating}
          />
        </div>
      ))}
      <Pagination numberOfPages={sortedData.length} />
    </div>
  );
}
