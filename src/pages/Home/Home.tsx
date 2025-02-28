import styles from "./Home.module.css";
import SalesHomeContainer from "../../components/SalesHomeContainer/SalesHomeContainer.tsx";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heroContainer}>
        <p className={styles.hero}>
          Мы — оптовый <span className={styles.highlightBlue}>поставщик</span>{" "}
          <br />
          <span className={styles.highlightPink}>канцелярских</span> и
          сопутствующих <span className={styles.highlightPink}>товаров</span>{" "}
          <br />
          для офиса и школы
        </p>
      </div>

      <div className={styles.salesContainer}>
        <SalesHomeContainer />
      </div>

      <div className={styles.joinBtnContainer}>
        <button className={styles.joinBtn}>Стать нашим клиентом</button>
      </div>
    </div>
  );
};

export default Home;
