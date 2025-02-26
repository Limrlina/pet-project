import styles from "./SalesContainer.module.css";
import clsx from "clsx";

const SalesContainer = () => {
  return (
    <div className={styles["sales-container"]}>
      <div className={clsx(styles["sale-banner"], styles["up-left"])}></div>
      <div className={clsx(styles["sale-banner"], styles["down-left"])}></div>

      <div className={clsx(styles["sale-banner"], styles["main"])}></div>

      <div className={clsx(styles["sale-banner"], styles["up-right"])}></div>
      <div className={clsx(styles["sale-banner"], styles["down-right"])}></div>
    </div>
  );
};

export default SalesContainer;
