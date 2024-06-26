import { CHARACTER_TITLE } from "@/util/constants";
import CharacterCard from "../CharacterCard";
import PaginationButton from "../PaginationButton";

import styles from "./styles.module.css";
import type { CharactersResponse } from "@/types";

interface Iprops {
  page: string;
  param: string;
  character: "char1" | "char2";
}

export default async function CharactersDisplay({
  page,
  param,
  character,
}: Iprops): Promise<JSX.Element> {
  const data: CharactersResponse = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  ).then(async (res) => await res.json());

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{CHARACTER_TITLE[character]}</h1>
      <nav className={styles.nav}>
        <PaginationButton page={data.info.prev} param={param}>
          {"<"}
        </PaginationButton>
        <span>{page}</span>
        <PaginationButton page={data.info.next} param={param}>
          {">"}
        </PaginationButton>
      </nav>
      <ul className={styles.list}>
        {data.results.map((character) => (
          <li key={character.id}>
            <CharacterCard data={character} param={param} />
          </li>
        ))}
      </ul>
    </section>
  );
}
