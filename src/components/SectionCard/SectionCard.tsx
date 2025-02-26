import styles from "./SectionCard.module.css";
import clsx from "clsx";

export interface SectionCardType {
  name: string;
  image: string;
  id?: number;
}

const SectionCard = ({ name, image }: SectionCardType) => {
  return (
    <div className={clsx(styles.card)}>
      <div className={styles["name-section"]}>
        <p className={styles["name"]}>{name}</p>
      </div>
      <div className={styles["image-section"]}>
        <img src={image} alt={name} className={styles["image"]} />
      </div>
    </div>
  );
};

export default SectionCard;
