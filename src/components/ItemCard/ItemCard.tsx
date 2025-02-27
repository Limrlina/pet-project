import styles from "./ItemCard.module.css";
import { Icon } from "@iconify/react";

export interface ItemCardType {
  name: string;
  image: string;
  brandName: string;
  quantity: number;
  price: number;
  id: number;
}

const ItemCard = ({
  name,
  image,
  brandName,
  quantity,
  price,
}: ItemCardType) => {
  return (
    <div className={styles.card}>
      <div className={styles["card-img-container"]}>
        <img src={image} alt={name} className={styles["card-img"]} />
      </div>
      <div className={styles["card-info"]}>
        <div className={styles["card-info-text-container"]}>
          <p className={styles["card-name"]}>{name}</p>
          <p className={styles["card-brand-name"]}>{brandName}</p>
          <p
            className={styles["card-quantity"]}
          >{`На складе: ${quantity} шт.`}</p>
        </div>
        <div className={styles["card-info-price-container"]}>
          <p className={styles["price"]}>{price}</p>
          <Icon icon="material-symbols:currency-ruble-rounded" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
