"use client";
import Image from "next/image";

import styles from "./styles.module.css";
import type { Character } from "@/types";
import { useContext } from "react";
import { CharacterSelection } from "@/context/characterSelection";

interface Iprops {
  data: Character;
  param: string;
}

export default function CharacterCard({ data, param }: Iprops): JSX.Element {
  const { dispatch } = useContext(CharacterSelection);

  function handleClick(): void {
    switch (param) {
      case "char1page":
        dispatch({ type: "UPDATE_CHARACTER_1", payload: data });
        break;
      case "char2page":
        dispatch({ type: "UPDATE_CHARACTER_2", payload: data });
        break;
    }
  }

  return (
    <article className={styles.container} onClick={handleClick}>
      <Image
        src={data.image}
        alt={data.name}
        width={100}
        height={100}
        className={styles.image}
      />
      <h2>{data.name}</h2>
      <p>
        {data.status} - {data.species}
      </p>
    </article>
  );
}
