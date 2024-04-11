import CharacterCard from "../CharacterCard";

import type { CharactersResponse } from "@/types";

export default async function CharactersDisplay(): Promise<JSX.Element> {
  const data: CharactersResponse = await fetch(
    "https://rickandmortyapi.com/api/character/?page=1"
  ).then(async (res) => await res.json());

  return (
    <section>
      <h1>Character #1</h1>
      <nav>
        <button>{"<"}</button>
        <span>1</span>
        <button>{">"}</button>
      </nav>
      <ul>
        {data.results.map((character) => (
          <li key={character.id}>
            <CharacterCard data={character} />
          </li>
        ))}
      </ul>
    </section>
  );
}
