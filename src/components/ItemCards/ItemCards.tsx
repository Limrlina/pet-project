import styles from "./ItemCards.module.css";
import ItemCard, { ItemCardType } from "../ItemCard/ItemCard.tsx";

const ItemCards = ({ setCards }: { setCards: ItemCardType[] }) => {
  return (
    <div className={styles.container}>
      {setCards.map(({ name, image, brandName, quantity, price, id }) => (
        <ItemCard
          name={name}
          image={image}
          brandName={brandName}
          quantity={quantity}
          price={price}
          id={id}
          key={id}
        />
      ))}
    </div>
  );
};

export default ItemCards;
