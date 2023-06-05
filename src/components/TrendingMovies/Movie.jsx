import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetMovieQuery } from 'request/movie/apiMovieSlice';

import styles from '../../styles/Movie.module.css';
import loadingStyles from '../../styles/Loading.module.css';

const Movie = () => {
  const [searchQuery] = useSearchParams();
  const id = searchQuery.get('id');
  const { data, isLoading } = useGetMovieQuery({ id });

  const {
    title,
    poster_path,
    status,
    release_date,
    tagline,
    overview,
    homepage,
  } = data ?? {};

  const handleClick = () => {
    window.location.href = homepage;
  };
  return (
    <>
      {isLoading ? (
        <div className={loadingStyles.loading}>
          <div className={loadingStyles.spinner}></div>
          <div>Loading...</div>
        </div>
      ) : (
        <section className={styles.product}>
          <div className={styles.images}>
            <div
              className={styles.current}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
              }}
            />
          </div>
          <div className={styles.info}>
            <div>
              <h1 className={styles.title}>{title}</h1>
              <div className={styles.release}>
                <div>
                  <span>Status: </span>
                  {status}
                </div>
                <div>
                  <span>Release date: </span>
                  {release_date}
                </div>
              </div>

              <div className={styles.tagline}>
                <span>Tagline: </span>
                {tagline}
              </div>

              <div className={styles.overview}>
                <span>Overview: </span>
                {overview}
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.add} onClick={handleClick}>
                See more
              </button>
              <button className={styles.favourite}>Add to watch list</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Movie;
