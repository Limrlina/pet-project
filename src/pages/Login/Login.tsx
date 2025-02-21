import styles from "./Login.module.css";
import clsx from "clsx";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles["form-container"]}>
        <div
          className={clsx(styles["registration-block"], styles["active-block"])}
        ></div>
        <div className={styles["registration-block"]}></div>
      </div>
    </div>
  );
};

export default Login;
