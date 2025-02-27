import styles from "./SectionCards.module.css";
import SectionCard, { SectionCardType } from "../SectionCard/SectionCard.tsx";

const SectionCards = ({ setCards }: { setCards: SectionCardType[] }) => {
  return (
    <div className={styles.container}>
      {setCards.map(({ name, image, sectionId, sectionType }) => (
        <SectionCard
          name={name}
          image={image}
          sectionId={sectionId}
          sectionType={sectionType}
          key={sectionId}
        />
      ))}
    </div>
  );
};

export default SectionCards;
