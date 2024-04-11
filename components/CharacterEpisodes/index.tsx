"use client";

import { Suspense, useContext } from "react";
import { CharacterSelection } from "@/context/characterSelection";
import Episode from "../Episode";

import styles from "./styles.module.css";

const CHARACTER_TITLE = {
  char1: "Character #1",
  char2: "Character #2",
};

interface Iprops {
  list: "char1" | "char2";
}

export default function CharacterEpisodes({ list }: Iprops): JSX.Element {
  const { data } = useContext(CharacterSelection);

  return (
    <section className={styles.container}>
      <h2>
        {data[list]?.name.length === 0
          ? CHARACTER_TITLE[list]
          : data[list]?.name}{" "}
        - Episodes
      </h2>
      <ul className={styles.list}>
        {data[list]?.episode.map((url) => (
          <li key={url}>
            <Suspense>
              <Episode url={url} />
            </Suspense>
          </li>
        ))}
      </ul>
    </section>
  );
}
