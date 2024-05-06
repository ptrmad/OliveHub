import styles from "./ArticleCover.module.css";

export function ArticleCover({ imgSource, isMain }) {
  return (
    <div className={`${isMain ? styles.articleCover : styles.articleCoverSub}`}>
      <img src={imgSource} />
      {isMain ? (
        <div className={styles.nameAndBrand}>
          <p className={styles.name}>Name</p>
          <p className={styles.brand}>Brand</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
