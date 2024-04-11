import type { Character } from "@/types";
import Image from "next/image";

interface Iprops {
  data: Character;
}

export default function CharacterCard({ data }: Iprops): JSX.Element {
  return (
    <article>
      <Image src={data.image} alt={data.name} width={100} height={100} />
      <h1>{data.name}</h1>
      <h2>
        {data.status} - {data.species}
      </h2>
    </article>
  );
}
