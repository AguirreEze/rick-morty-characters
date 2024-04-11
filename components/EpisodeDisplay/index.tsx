"use client";

import { useContext } from "react";
import { CharacterSelection } from "@/context/characterSelection";

import styles from "./styles.module.css";

export default function EpisodesDisplay(): JSX.Element {
  const { data } = useContext(CharacterSelection);

  return (
    <section className={styles.container}>
      <h2>
        {data.char1.name.length === 0 ? "Character #1" : data.char1.name} -
        Episodes
      </h2>
      <ul className={styles.list}>
        {data.char1.episode.map((url) => (
          <li key={url}>
            <h3>{url}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
}
