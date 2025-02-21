import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header.tsx";
import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <>
            <Header />
            <main className={styles.container}>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;