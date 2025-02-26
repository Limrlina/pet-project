import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { useAuth } from "../../contexts/AuthContext.tsx";
import LoginForm from "../../components/forms/LoginForm/LoginForm.tsx";
import RegisterForm from "../../components/forms/RegisterForm/RegisterForm.tsx";

const Login = () => {
  const [loginActive, setLoginActive] = useState(true);
  const { setStatus } = useAuth();

  useEffect(() => {
    setStatus("signing-in");

    if (window.innerWidth < 500) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
      setStatus("unauthenticated");
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles["form-container"]}>
        {!loginActive && (
          <div className={clsx(styles["btn-container"], styles["left"])}>
            <p className={styles["btn-container-header"]}>Есть аккаунт?</p>
            <button
              className={styles["change-form-btn"]}
              onClick={() => setLoginActive(!loginActive)}
            >
              Войти
            </button>
          </div>
        )}

        {loginActive && (
          <div className={clsx(styles["btn-container"], styles["right"])}>
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

        <div
          className={clsx(
            styles["slice-block"],
            loginActive ? styles.left : styles.right,
          )}
        >
          {loginActive ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};

export default Login;
