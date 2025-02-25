import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm.tsx";
import RegisterForm from "../../components/RegisterForm/RegisterForm.tsx";
import clsx from "clsx";

const Login = () => {
  const [loginActive, setLoginActive] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
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
            <p className={styles["btn-container-header"]}>
              Уже зарегистрированы?
            </p>
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
            <p className={styles["btn-container-header"]}>
              Ещё не зарегистрированы?
            </p>
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
