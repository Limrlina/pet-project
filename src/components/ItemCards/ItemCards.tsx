import styles from "./ItemCards.module.css";
import ItemCard, { ItemCardType } from "../ItemCard/ItemCard.tsx";

const ItemCards = ({ setCards }: { setCards: ItemCardType[] }) => {
  return (
    <div className={styles.container}>
      {setCards.map((card) => (
        <ItemCard cardInfo={card} key={card.id} />
      ))}
    </div>
  );
};

export default ItemCards;
