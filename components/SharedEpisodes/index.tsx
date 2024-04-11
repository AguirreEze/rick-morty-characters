"use client";

import { Suspense, useContext } from "react";
import { CharacterSelection } from "@/context/characterSelection";
import Episode from "../Episode";
import intersectArrays from "@/util/intercectArrays";

import styles from "./styles.module.css";

export default function SharedEpisodes(): JSX.Element {
  const { data } = useContext(CharacterSelection);

  function bothCharacterSelected(): boolean {
    return (
      typeof data.char1.id !== "undefined" &&
      typeof data.char2.id !== "undefined"
    );
  }

  return (
    <section className={styles.container}>
      <h2>Shared Episodes</h2>
      {bothCharacterSelected() ? (
        <ul>
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
