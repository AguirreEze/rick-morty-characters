"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import styles from "./styles.module.css";

interface Iprops {
  page: string | null;
  param: string;
  children: string;
}

export default function PaginationButton({
  children,
  page,
  param,
}: Iprops): JSX.Element {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleClick(): void {
    if (typeof page === "string") {
      const params = new URLSearchParams(searchParams);
      params.set(param, page?.replace(/.*\?page=/, ""));

      router.replace(pathname + "?" + params.toString());
    }
  }

  return (
    <button
      className={styles.button}
      disabled={page === null}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
