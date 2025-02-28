import styles from "./Login.module.css";
import { useEffect, useState } from "react";
import clsx from "clsx";
import LoginForm from "../../components/forms/LoginForm/LoginForm.tsx";
import RegisterForm from "../../components/forms/RegisterForm/RegisterForm.tsx";

const Login = () => {
  const [loginActive, setLoginActive] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 500) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        {!loginActive && (
          <div className={clsx(styles.btnContainer, styles.left)}>
            <p className={styles.btnContainerHeader}>Есть аккаунт?</p>
            <button
              className={styles.changeFormBtn}
              onClick={() => setLoginActive(!loginActive)}
            >
              Войти
            </button>
          </div>
        )}

        {loginActive && (
          <div className={clsx(styles.btnContainer, styles.right)}>
            <p className={styles.btnContainerHeader}>Нет аккаунта?</p>
            <div>
              <p className={styles.btnContainerSubheader}>
                Зарегистрируйтесь, чтобы получить возможность оформлять заказы
                на нашем сайте!
              </p>
            </div>
            <button
              className={styles.changeFormBtn}
              onClick={() => setLoginActive(!loginActive)}
            >
              Зарегистрироваться
            </button>
          </div>
        )}

        <div
          className={clsx(
            styles.sliceBlock,
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
