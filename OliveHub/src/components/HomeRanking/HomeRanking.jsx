import { HomeRankingItem } from "../HomeRankingItem/HomeRankingItem";
import styles from "./HomeRanking.module.css";
import FIRST from "../../assets/1stplace.svg";
import SECOND from "../../assets/2ndplace.svg";
import THIRD from "../../assets/3rdplace.svg";

export function HomeRanking() {
  return (
    <div className={styles.homeRanking}>
      {/* {data
              .sort((a, b) => (a.rating) - (b.rating))
              .slice(0, 5)
              .map((item) => (
                <HomeRankingItem
                  key={item.id}
                  imgSource={item.image}
                  oliveName={item.name}
                  oliveBrand={item.brand}
                  oliveRev={item.review.slice(0, 100)} */}
      <div className={styles.podium}>
        <img src={FIRST} />

        <HomeRankingItem />
      </div>
      <div className={styles.podium}>
        <img src={SECOND} />

        <HomeRankingItem />
      </div>
      <div className={styles.podium}>
        <div className={styles.podiumImageWrapper}></div>
        <img src={THIRD} />

        <HomeRankingItem />
      </div>
      <HomeRankingItem />
      <HomeRankingItem />
    </div>
  );
}
