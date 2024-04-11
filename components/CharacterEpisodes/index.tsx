"use client";

import { useContext } from "react";
import { CharacterSelection } from "@/context/characterSelection";

import styles from "./styles.module.css";

interface Iprops {
  list: "char1" | "char2";
}

export default function CharacterEpisodes({ list }: Iprops): JSX.Element {
  const { data } = useContext(CharacterSelection);

  return (
    <section className={styles.container}>
      <h2>
        {data[list]?.name.length === 0 ? "Character #1" : data[list]?.name} -
        Episodes
      </h2>
      <ul className={styles.list}>
        {data[list]?.episode.map((url) => (
          <li key={url}>
            <h3>{url}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
