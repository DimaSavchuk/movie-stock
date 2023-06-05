import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useGetCategoryMoviesQuery } from 'request/movie/apiMovieSlice';

import styles from '../../styles/Products.module.css';
import loadingStyles from '../../styles/Loading.module.css';

const CategoryMovies = () => {
  const [searchQuery] = useSearchParams();

  const name = searchQuery.get('name');

  const { data, isLoading } = useGetCategoryMoviesQuery({ name });

  return (
    <>
      {isLoading ? (
        <div className={loadingStyles.loading}>
          <div className={loadingStyles.spinner}></div>
          <div>Loading...</div>
        </div>
      ) : (
        <section className={styles.products}>
          {name && <h2>{name}</h2>}
          <div className={styles.list}>
            {data.results.map(
              ({ id, name, original_name, overview, poster_path }) => (
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
                    <h3 className={styles.title}>{name}</h3>
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
