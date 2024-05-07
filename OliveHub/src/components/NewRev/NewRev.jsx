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
              {data
                .sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate))
                .slice(0, 1)
                .map((item) => (
                  <ArticleCover
                    key={item.id}
                    imgSource={item.image}
                    isMain={true}
                    oliveName={item.name}
                    oliveBrand={item.brand}
                    oliveRev={item.review.slice(0, 100)}
                  />
                ))}
            </div>
          </div>
          <div className={styles.aside}>
            {data
              .sort((a, b) => new Date(b.reviewDate) - new Date(a.reviewDate))
              .slice(1, 4)
              .map((item) => (
                <ArticleCover
                  key={item.id}
                  imgSource={item.image}
                  isMain={false}
                  oliveName={item.name}
                  oliveBrand={item.brand}
                  oliveRev={item.review.slice(0, 100)}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
