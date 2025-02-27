import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./Catalog.module.css";
import clsx from "clsx";

const Catalog = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li>
            <Link
              to="/catalog/sections"
              className={clsx(
                styles["list-item"],
                location.pathname === "/catalog/sections" && styles["selected"],
              )}
            >
              Каталог товаров
            </Link>
          </li>
          <li>
            <Link
              to="/catalog/brands"
              className={clsx(
                styles["list-item"],
                location.pathname === "/catalog/brands" && styles["selected"],
              )}
            >
              Бренды
            </Link>
          </li>
          <li>
            <Link
              to="/catalog/collections"
              className={clsx(
                styles["list-item"],
                location.pathname === "/catalog/collections" &&
                  styles["selected"],
              )}
            >
              Подборки товаров
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Catalog;
