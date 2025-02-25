import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../../contexts/AuthContext.tsx";
import { useEffect, useState } from "react";

const Header = () => {
  const [buttonText, setButtonText] = useState("Войти");
  const [buttonPath, setButtonPath] = useState("/");
  const { status } = useAuth();

  const statusProps = {
    unauthenticated: {
      text: "Войти",
      linkTo: "/login",
    },
    "signing-in": {
      text: "Назад",
      linkTo: "/",
    },
    authenticated: {
      text: "Кабинет",
      linkTo: "/",
    },
  };

  useEffect(() => {
    setButtonText(statusProps[status].text);
    setButtonPath(statusProps[status].linkTo);
  }, [status]);

  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.left}>
          <Link to="/catalog" className={`${styles.link} ${styles.element}`}>
            Каталог
          </Link>
        </li>
        <li className={styles.center}>
          <Link to="/" className={`${styles.link} ${styles.logo}`}>
            Элимканц
          </Link>
        </li>
        <li className={styles.right}>
          <Link to={buttonPath} className={`${styles.link} ${styles.element}`}>
            {buttonText}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
