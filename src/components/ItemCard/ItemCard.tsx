import styles from "./ItemCard.module.css";

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
      <img src={image} alt={name} />
      <p>{name}</p>
      <p>{brandName}</p>
      <p>{quantity}</p>
      <p>{price}</p>
    </div>
  );
};

export default ItemCard;
