import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

export const metadata = {
  title: "healthyUS | Category",
  description: "This is Contact Page",
};

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Different Categories</h1>
      <div className={styles.items}>
        <Link href="/portfolio/lifestyle" className={styles.item}>
          <span className={styles.title}>Lifestyle</span>
        </Link>
        <Link href="/portfolio/food" className={styles.item}>
          <span className={styles.title}>Food</span>
        </Link>
        <Link href="/portfolio/exercise" className={styles.item}>
          <span className={styles.title}>Exercise</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
