import { CHARACTER_TITLE } from "@/util/constants";
import CharacterCard from "../CharacterCard";
import PaginationButton from "../PaginationButton";
import PageNumberDisplay from "../PageNumberDisplay";

import styles from "./styles.module.css";
import type { CharactersResponse } from "@/types";

interface Iprops {
  page: string;
  param: "char1page" | "char2page";
  character: "char1" | "char2";
}

export default async function CharactersDisplay({
  page,
  param,
  character,
}: Iprops): Promise<JSX.Element> {
  function isPageValidValue(param: string | string[]): string {
    // checks if param is a string
    if (typeof param !== "string") return "1";
    // check if the string only contains numbers
    if (!/\d+/.test(param)) return "1";
    // checks if is higher than 0
    if (parseInt(param) < 1) return "1";
    // checks if its higher than the max pages
    if (parseInt(param) > 42) return "42";
    return param;
  }

  const data: CharactersResponse = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${isPageValidValue(page)}`
  ).then(async (res) => await res.json());

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{CHARACTER_TITLE[character]}</h1>
      <nav className={styles.nav}>
        <PaginationButton url={data.info?.prev} param={param}>
          {"<"}
        </PaginationButton>
        <PageNumberDisplay
          page={isPageValidValue(page)}
          param={param}
          lastPage={data.info?.pages}
        />
        <PaginationButton url={data.info?.next} param={param}>
          {">"}
        </PaginationButton>
      </nav>
      <ul className={styles.list}>
        {data.results?.map((character) => (
          <li key={character.id}>
            <CharacterCard data={character} param={param} />
          </li>
        ))}
      </ul>
    </section>
  );
}
