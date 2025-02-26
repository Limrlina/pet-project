import styles from "./Home.module.css";
import clsx from "clsx";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles["hero-container"]}>
        <p className={styles.hero}>
          Мы — оптовый{" "}
          <span className={styles["highlight-blue"]}>поставщик</span> <br />
          <span className={styles["highlight-pink"]}>канцелярских</span> и
          сопутствующих{" "}
          <span className={styles["highlight-pink"]}>товаров</span> <br />
          для офиса и школы
        </p>
      </div>
      <div className={styles["sales-container"]}>
        <div className={clsx(styles["sale-banner"], styles["up-left"])}></div>
        <div className={clsx(styles["sale-banner"], styles["down-left"])}></div>

        <div className={clsx(styles["sale-banner"], styles["main"])}></div>

        <div className={clsx(styles["sale-banner"], styles["up-right"])}></div>
        <div
          className={clsx(styles["sale-banner"], styles["down-right"])}
        ></div>
      </div>
      <div className={styles["join-btn-container"]}>
        <button className={styles["join-btn"]}>Стать нашим клиентом</button>
      </div>
    </div>
  );
};

export default Home;
