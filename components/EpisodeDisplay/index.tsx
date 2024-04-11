"use client";

import { Suspense, useContext } from "react";
import { CharacterSelection } from "@/context/characterSelection";
import intersectArrays from "@/util/intercectArrays";
import Episode from "../Episode";

import styles from "./styles.module.css";

const CHARACTER_TITLE = {
  char1: "Character #1",
  char2: "Character #2",
};

interface Iprops {
  list: "char1" | "char2";
}

export function CharacterEpisodes({ list }: Iprops): JSX.Element {
  const { data } = useContext(CharacterSelection);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>
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

export function SharedEpisodes(): JSX.Element {
  const { data } = useContext(CharacterSelection);

  function bothCharacterSelected(): boolean {
    return (
      typeof data.char1.id !== "undefined" &&
      typeof data.char2.id !== "undefined"
    );
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Shared Episodes</h2>
      {bothCharacterSelected() ? (
        <ul className={styles.list}>
          {intersectArrays(data.char1.episode, data.char2.episode).map(
            (url) => (
              <ul key={url}>
                <Suspense>
                  <Episode url={url} />
                </Suspense>
              </ul>
            )
          )}
        </ul>
      ) : (
        <></>
      )}
    </section>
  );
}
