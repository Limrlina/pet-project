import styles from "./SectionCard.module.css";
import clsx from "clsx";
import { Link } from "react-router-dom";

export interface SectionCardType {
  name: string;
  image: string;
  sectionType: string;
  sectionId: number;
}

const SectionCard = ({ cardInfo }: { cardInfo: SectionCardType }) => {
  const { name, image, sectionType, sectionId } = cardInfo;
  return (
    <Link to={`/catalog/${sectionType}/${sectionId}`} className={styles.link}>
      <div className={clsx(styles.card)}>
        <div className={styles.nameSection}>
          <p className={styles.name}>{name}</p>
        </div>
        <div className={styles.imageSection}>
          <img src={image} alt={name} className={styles.image} />
        </div>
      </div>
    </Link>
  );
};

export default SectionCard;
