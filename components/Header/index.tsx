import React from "react";
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.menu} >
        <li >
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/users">
            <a>users</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
