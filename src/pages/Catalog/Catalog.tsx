import styles from "./Catalog.module.css";
import { useState } from "react";
import Sections from "../../components/Sections/Sections.tsx";
import Brands from "../../components/Brands/Brands.tsx";
import Collections from "../../components/Collections/Collections.tsx";
import clsx from "clsx";

const Catalog = () => {
  const [selectedSection, setSelectedSection] = useState<
    "sections" | "brands" | "collections"
  >("sections");

  const addSelectedSection = () => {
    if (selectedSection === "sections") return <Sections />;
    if (selectedSection === "brands") return <Brands />;
    return <Collections />;
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li>
            <button
              onClick={() => setSelectedSection("sections")}
              className={clsx(
                styles["list-item"],
                selectedSection === "sections" && styles["selected"],
              )}
            >
              Каталог товаров
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedSection("brands")}
              className={clsx(
                styles["list-item"],
                selectedSection === "brands" && styles["selected"],
              )}
            >
              Бренды
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedSection("collections")}
              className={clsx(
                styles["list-item"],
                selectedSection === "collections" && styles["selected"],
              )}
            >
              Подборки товаров
            </button>
          </li>
        </ul>
      </nav>
      <div className={styles["selected-section"]}>{addSelectedSection()}</div>
    </div>
  );
};

export default Catalog;
