"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./styles.module.css";

interface Iprops {
  url: string | null;
  param: "char1page" | "char2page";
  children: string;
}

export default function PaginationButton({
  children,
  url,
  param,
}: Iprops): JSX.Element {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(): void {
    if (typeof url === "string") {
      const params = new URLSearchParams(searchParams);
      params.set(param, url?.replace(/.*\?page=/, ""));

      router.replace(pathname + "?" + params.toString());
    }
  }

  return (
    <button
      className={styles.button}
      disabled={url === null}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
