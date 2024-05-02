import styles from "./NewRev.module.css";
import { data } from "../../data/data";
import { ArticleCover } from "../ArticleCover/ArticleCover";

export function NewRev() {
  return (
    <div>
      <div className={styles.newRev}>
        <h2>Latest Reviews</h2>
        <div className={styles.grid}>
          <div>
            <div className={styles.main}>
              <ArticleCover imgSource={data[0].image} isMain={true} />
            </div>
          </div>
          <div className={styles.aside}>
            <ArticleCover imgSource={data[0].image} isMain={false} />
            <ArticleCover imgSource={data[0].image} isMain={false} />
            <ArticleCover imgSource={data[0].image} isMain={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
