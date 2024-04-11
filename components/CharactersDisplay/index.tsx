import CharacterCard from "../CharacterCard";

import styles from "./styles.module.css";
import type { CharactersResponse } from "@/types";

export default async function CharactersDisplay(): Promise<JSX.Element> {
  const data: CharactersResponse = await fetch(
    "https://rickandmortyapi.com/api/character/?page=1"
  ).then(async (res) => await res.json());

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Character #1</h1>
      <nav className={styles.nav}>
        <button className={styles.button}>{"<"}</button>
        <span>1</span>
        <button className={styles.button}>{">"}</button>
      </nav>
      <ul className={styles.list}>
        {data.results.map((character) => (
          <li key={character.id}>
            <CharacterCard data={character} />
          </li>
        ))}
      </ul>
    </section>
  );
}
