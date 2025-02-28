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

const ItemCard = ({ cardInfo }: { cardInfo: ItemCardType }) => {
  const { name, image, brandName, quantity, price } = cardInfo;
  return (
    <div className={styles.card}>
      <div className={styles.cardImgContainer}>
        <img src={image} alt={name} className={styles.cardImg} />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardInfoTextContainer}>
          <p className={styles.cardName}>{name}</p>
          <p className={styles.cardBrandName}>{brandName}</p>
          <p className={styles.cardQuantity}>{`На складе: ${quantity} шт.`}</p>
        </div>
        <div className={styles.cardInfoPriceContainer}>
          <p className={styles.price}>{price}</p>
          <Icon icon="material-symbols:currency-ruble-rounded" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
