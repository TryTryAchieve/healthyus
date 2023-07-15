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
      <div className={styles.wrapper}>
        <Link href="/portfolio/lifestyle" className={styles.card}>
          <span className={styles.info}> 
            <span className={styles.title}>Lifestyle</span>
            blogs to uplift ur lifestyle 
          </span>
        </Link>
        <Link href="/portfolio/food" className={styles.card}>
          <span className={styles.info}> 
            <span className={styles.title}>Food</span>
            blogs to uplift ur lifestyle 
          </span>
        </Link>
        <Link href="/portfolio/exercise" className={styles.card}>
          <span className={styles.info}> 
            <span className={styles.title}>Exercise</span>
            blogs to uplift ur lifestyle 
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
