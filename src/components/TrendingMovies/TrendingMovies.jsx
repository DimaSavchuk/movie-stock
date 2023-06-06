import React from 'react';
import { Link } from 'react-router-dom';
import { useGetTrendingMoviesQuery } from 'request/movie/apiMovieSlice';
import styles from '../../styles/MoviesList.module.css';
import loadingStyles from '../../styles/Loading.module.css';

const TrendingMovies = ({ title }) => {
  const { data, isLoading } = useGetTrendingMoviesQuery();

  const { results } = data || {};

  return (
    <>
      {isLoading ? (
        <div className={loadingStyles.loading}>
          <div className={loadingStyles.spinner}></div>
          <div>Loading...</div>
        </div>
      ) : (
        <section className={styles.movies}>
          {title && <h2>{title}</h2>}
          <div className={styles.list}>
            {results.map(
              ({
                id,
                poster_path,
                title,
                vote_count,
                release_date,
                vote_average,
              }) => {
                const formattedRating = vote_average.toFixed(1);

                return (
                  <Link
                    to={`/movie?id=${id}`}
                    className={styles.movie}
                    key={id}
                  >
                    <div
                      className={styles.image}
                      style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
                      }}
                    />

                    <div className={styles.wrapper}>
                      <h3 className={styles.title}>{title}</h3>
                      <div className={styles.rating}>
                        <span className={styles.ratingCircle}>
                          {formattedRating}
                        </span>
                      </div>

                      <div className={styles.info}>
                        <div className={styles.release_date}>
                          {release_date}
                        </div>
                        <div className={styles.vote_count}>
                          Vote count: {vote_count}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              }
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default TrendingMovies;
