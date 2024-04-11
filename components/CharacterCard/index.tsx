import Image from "next/image";

import styles from "./styles.module.css";
import type { Character } from "@/types";

interface Iprops {
  data: Character;
}

export default function CharacterCard({ data }: Iprops): JSX.Element {
  return (
    <article className={styles.container}>
      <Image
        src={data.image}
        alt={data.name}
        width={100}
        height={100}
        className={styles.image}
      />
      <h2>{data.name}</h2>
      <p>
        {data.status} - {data.species}
      </p>
    </article>
  );
}
