import { GoodDataType } from "@/types";
import Link from "next/link";
import styles from "@/components/good-item.module.css";
import Image from "next/image";

const GoodItem = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: GoodDataType): JSX.Element => {
  return (
    <Link href={`/good/${id}`} className={styles.container}>
      <Image src={image} alt={title} width={80} height={80} />
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.category}>{category}</div>
        <div className={styles.rating}>
          Rating: {rating.rate} ({rating.count})
        </div>
      </div>
    </Link>
  );
};

export default GoodItem;
