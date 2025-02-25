import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";
import RegisterForm from "../../components/RegisterForm/RegisterForm.tsx";
import clsx from "clsx";

const Login = () => {
  const [loginActive, setLoginActive] = useState(true);

  useEffect(() => {
    console.log(window.innerWidth);
    if (window.innerWidth < 500) {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "";
      };
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles["form-container"]}>
        <div
          className={clsx(
            styles["slice-block"],
            loginActive ? styles.left : styles.right,
          )}
        ></div>
        {(loginActive && (
          <div className={styles["login-block"]}>
            <LoginForm />
          </div>
        )) || (
          <div className={styles["btn-container"]}>
            <p className={styles["btn-container-header"]}>Есть аккаунт?</p>
            <button
              className={styles["change-form-btn"]}
              onClick={() => setLoginActive(!loginActive)}
            >
              Войти
            </button>
          </div>
        )}
        {(!loginActive && (
          <div className={styles["registration-block"]}>
            <RegisterForm />
          </div>
        )) || (
          <div className={styles["btn-container"]}>
            <p className={styles["btn-container-header"]}>Нет аккаунта?</p>
            <div>
              <p className={styles["btn-container-subheader"]}>
                Зарегистрируйтесь, чтобы получить возможность оформлять заказы
                на нашем сайте!
              </p>
            </div>
            <button
              className={styles["change-form-btn"]}
              onClick={() => setLoginActive(!loginActive)}
            >
              Зарегистрироваться
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
