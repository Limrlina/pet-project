import styles from "./ItemCard.module.css";

export interface ItemCardType {
  name: string;
  image: string;
  brand: string;
  count: number;
  price: number;
}

const ItemCard = ({ name, image, brand, count, price }: ItemCardType) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{brand}</p>
      <p>{count}</p>
      <p>{price}</p>
    </div>
  );
};

export default ItemCard;
