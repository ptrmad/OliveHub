import styles from "./HomeRankingItem.module.css";

export function HomeRankingItem() {
  return (
    <div className={styles.homeRankingItem}>
      <p>Name</p>
      <p>Brand</p>
      <p>Rating</p>
      <div>Image</div>
    </div>
  );
}
