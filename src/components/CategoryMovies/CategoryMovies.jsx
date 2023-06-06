import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useGetCategoryMoviesQuery } from 'request/movie/apiMovieSlice';

import styles from '../../styles/MoviesList.module.css';
import loadingStyles from '../../styles/Loading.module.css';
import Hero from 'components/Hero/Hero';

const CategoryMovies = () => {
  const [searchQuery] = useSearchParams();

  const id = searchQuery.get('id');

  const { data, isLoading } = useGetCategoryMoviesQuery({ id });

  const { results } = data || {};

  return (
    <>
      <Hero results={results} isLoading={isLoading} />
      {isLoading ? (
        <div className={loadingStyles.loading}>
          <div className={loadingStyles.spinner}></div>
          <div>Loading...</div>
        </div>
      ) : (
        <section className={styles.movies}>
          <div className={styles.list}>
            {results.map(
              ({
                id,
                title,
                release_date,
                poster_path,
                vote_count,
                vote_average,
              }) => {
                const formattedRating = vote_average.toFixed(1);

                return (
                  <Link
                    to={`/movie?id=${id}`}
                    className={styles.movie}
                    key={id}
                  >
                    {poster_path ? (
                      <div
                        className={styles.image}
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
                        }}
                      />
                    ) : (
                      <div className={styles.placeholderImage}></div>
                    )}

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

export default CategoryMovies;
