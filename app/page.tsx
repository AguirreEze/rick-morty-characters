import CharactersDisplay from "@/components/CharactersDisplay";
import styles from "./page.module.css";

interface Iprops {
  searchParams: Record<string, string>;
}

export default function Home({ searchParams }: Iprops): JSX.Element {
  return (
    <main className={styles.main}>
      <CharactersDisplay
        page={searchParams?.char1page ?? "1"}
        param="char1page"
      />
    </main>
  );
}
