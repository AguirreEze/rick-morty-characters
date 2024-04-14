"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./styles.module.css";

interface Iprops {
  page: string;
  param: "char1page" | "char2page";
  lastPage: number;
}

export default function PageNumberDisplay({
  page,
  param,
  lastPage,
}: Iprops): JSX.Element {
  const [value, setValue] = useState(page);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleSubmit(e: FormEvent): void {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.set(param, value);

    router.replace(pathname + "?" + params.toString());
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        max={lastPage}
      />
      <button type="submit" className={styles.button}>
        ↵
      </button>
    </form>
  );
}
