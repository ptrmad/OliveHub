import styles from "./ArticleCover.module.css";

export function ArticleCover({ imgSource, isMain }) {
  return (
    <div className={`${isMain ? styles.articleCover : styles.articleCoverSub}`}>
      <img src={imgSource} />
    </div>
  );
}
