import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../../contexts/AuthContext.tsx";

const statusProps = {
  unauthenticated: {
    text: "Войти",
    linkTo: "/login",
  },
  authenticated: {
    text: "Выйти",
    linkTo: "/",
  },
};

const Header = () => {
  const { status } = useAuth();

  console.log({ status });
  const { text: buttonText, linkTo: buttonPath } = statusProps[status];

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
            Скрепочка
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
