import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header.tsx";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
