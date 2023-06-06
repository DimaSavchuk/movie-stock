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
        <section className={styles.products}>
          <div className={styles.list}>
            {results.map(
              ({
                id,
                title,
                release_date,
                poster_path,
                vote_count,
                popularity,
              }) => (
                <Link
                  to={`/movie?id=${id}`}
                  className={styles.product}
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
                    <div className={styles.cat}>Popularity: {popularity}</div>
                    <div className={styles.info}>
                      <div className={styles.prices}>{release_date}</div>
                      <div className={styles.purchases}>
                        Vote count: {vote_count}
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default CategoryMovies;
