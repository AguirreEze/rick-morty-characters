"use client";

import { CharacterSelection } from "@/context/characterSelection";
import { useContext } from "react";

export default function EpisodesDisplay(): JSX.Element {
  const { data } = useContext(CharacterSelection);

  return (
    <section>
      <h2>
        {data.char1.name.length === 0 ? "Character #1" : data.char1.name} -
        Episodes
      </h2>
      {data.char1.episode.map((url) => (
        <h3 key={url}>{url}</h3>
      ))}
    </section>
  );
}
