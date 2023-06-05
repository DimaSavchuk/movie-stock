import React, { useEffect, useState } from 'react';
import styles from '../../styles/Products.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTrendingMovies } from '../../request/trendingMovies/trendingMoviesSlice';

const TrendingMovies = ({ title }) => {
  const dispatch = useDispatch();
  const [results, setGenres] = useState([]);

  useEffect(() => {
    dispatch(getTrendingMovies())
      .then(response => {
        setGenres(response.payload.results);
      })
      .catch(error => console.log(error));
  }, [dispatch]);

  return (
    <section className={styles.products}>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {results.map(
          ({
            id,
            poster_path,
            title,
            vote_count,
            release_date,
            popularity,
          }) => (
            <Link to={`/movie?id=${id}`} className={styles.product} key={id}>
              <div
                className={styles.image}
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
                }}
              />

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
  );
};

export default TrendingMovies;
