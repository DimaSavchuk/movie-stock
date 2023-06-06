import React from 'react';

import styles from '../../styles/Hero.module.css';
import loadingStyles from '../../styles/Loading.module.css';

const Hero = ({ results, isLoading }) => {
  const randomIndex = Math.floor(Math.random() * 20);
  return (
    <>
      {isLoading ? (
        <div className={loadingStyles.loading}>Loading...</div>
      ) : (
        <section
          className={styles.home}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${results[randomIndex].backdrop_path})`,
          }}
        >
          <div className={styles.title}>Film Lover's</div>
          <div className={styles.product}>
            <div className={styles.text}>
              <div className={styles.subtitle}>
                Where Cinematic Dreams Come to Life
              </div>
              <h1 className={styles.head}>
                Discover, Explore, and Experience the Magic of Movies
              </h1>
              <button className={styles.button}>Watch list</button>
            </div>
            <div className={styles.image}></div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
