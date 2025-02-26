import styles from "./Home.module.css";
import SalesContainer from "../../components/SalesContainer/SalesContainer.tsx";

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

      <SalesContainer />

      <div className={styles["join-btn-container"]}>
        <button className={styles["join-btn"]}>Стать нашим клиентом</button>
      </div>
    </div>
  );
};

export default Home;
