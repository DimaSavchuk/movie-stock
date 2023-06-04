import React from "react";

import styles from "../../styles/Home.module.css";

import BACKGROUND from "../../images/computer.png";

const Hero = () => {
  return (
    <section className={styles.home}>
      <div className={styles.title}>SOME INFO</div>
      <div className={styles.product}>
        <div className={styles.text}>
          <div className={styles.subtitle}>Some subtitle</div>
          <h1 className={styles.head}>
            Some information or a call to purchase{" "}
          </h1>
          <button className={styles.button}>Watch list</button>
        </div>
        <div className={styles.image}>
          {/* <img src={BACKGROUND} alt="back ground" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;