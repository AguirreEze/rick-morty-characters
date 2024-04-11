import CharactersDisplay from "@/components/CharactersDisplay";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <main className={styles.main}>
      <CharactersDisplay />
    </main>
  );
}
