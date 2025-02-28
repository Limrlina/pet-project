import styles from "./SectionCards.module.css";
import SectionCard, { SectionCardType } from "../SectionCard/SectionCard.tsx";

const SectionCards = ({ setCards }: { setCards: SectionCardType[] }) => {
  return (
    <div className={styles.container}>
      {setCards.map((card) => (
        <SectionCard cardInfo={card} key={card.sectionId} />
      ))}
    </div>
  );
};

export default SectionCards;
