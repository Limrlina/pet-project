import styles from "./SectionCards.module.css";
import SectionCard, { SectionCardType } from "../SectionCard/SectionCard.tsx";

const SectionCards = ({ setCards }: { setCards: SectionCardType[] }) => {
  return (
    <div className={styles.container}>
      {setCards.map(({ name, image, id }) => (
        <SectionCard name={name} image={image} key={id} />
      ))}
    </div>
  );
};

export default SectionCards;
