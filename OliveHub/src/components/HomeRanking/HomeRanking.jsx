import { HomeRankingItem } from "../HomeRankingItem/HomeRankingItem";
import styles from "./HomeRanking.module.css";
import FIRST from "../../assets/1stplace.svg";
import SECOND from "../../assets/2ndplace.svg";
import THIRD from "../../assets/3rdplace.svg";
import { data } from "../../data/data";

export function HomeRanking() {
  const sortedData = data.sort((a, b) => b.rating - a.rating).slice(0, 5);

  return (
    <div className={styles.homeRanking}>
      <h2>TOP OLIVE OILS</h2>

      <div className={styles.homeRankingFlex}>
        {sortedData.map((item, index) => (
          <div key={item.id} className={styles.podium}>
            {index < 3 && (
              <img
                className={styles.award}
                src={[FIRST, SECOND, THIRD][index]}
              />
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
      </div>
    </div>
  );
}
{
  /* <div className={styles.podium}>
        <img className={styles.award} src={FIRST} />

        <HomeRankingItem />
      </div>
      <div className={styles.podium}>
        <img className={styles.award} src={SECOND} />

        <HomeRankingItem />
      </div>
      <div className={styles.podium}>
        <div className={styles.podiumImageWrapper}></div>
        <img className={styles.award} src={THIRD} />

        <HomeRankingItem />
      </div>
      <HomeRankingItem />
      <HomeRankingItem /> */
}
