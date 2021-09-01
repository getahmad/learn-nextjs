import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "../Footer";
import Header from "../Header";
import styles from "./layout.module.css";

interface LayoutProps {
  children: ReactNode;
  pageTitle: String;
}

export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="description next js" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.children}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
