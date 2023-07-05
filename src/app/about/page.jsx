import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
import about from "public/about.jpg"
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={about}
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Learn ... Move Forward</h1>
          <h2 className={styles.imgDesc}>
            Life changing blogs and experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Introduction</h1>
          <p className={styles.desc}>
            Welcome to our dynamic online platform, where individuals from all walks of life share their knowledge, experiences, and insights on health, food, exercise, and lifestyle. Our website serves as a vibrant community hub, connecting people who are passionate about well-being and eager to support one another. Whether you&apos;re seeking delicious recipes, workout routines, mental health advice, or simply looking for inspiration to lead a healthier lifestyle, our platform offers a vast array of user-generated blogs. Join us in this collaborative space, where you can explore, contribute, and engage with like-minded individuals dedicated to enhancing their overall wellness.
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Our Methodology</h1>
          <p className={styles.desc}>
            Individuals come together to heal, support, and uplift one another through shared blogs and personal experiences. Our website serves as a safe haven, providing a platform for individuals to express their struggles, triumphs, and the transformative journeys they have embarked upon. Here, you&apos;ll find heartfelt stories, insightful advice, and empowering narratives that inspire hope and resilience. Whether you&apos;re seeking solace, guidance, or simply a connection with others who have faced similar challenges, our community offers a compassionate space where healing thrives and support is abundant. Join us in this beautiful journey of mutual aid and personal growth, as we navigate life&apos;s ups and downs together.
            <br />
            <br /> - Lifestyles tips from experienced doctors
            <br />
            <br /> - Food habits from nutritionist
            <br />
            <br /> - life experiences from fellow users
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
