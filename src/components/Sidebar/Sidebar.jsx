import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../../styles/Sidebar.module.css';

import { useGetCategoryQuery } from 'request/movie/apiMovieSlice';
import loadingStyles from '../../styles/Loading.module.css';

const Sidebar = () => {
  const { data, isLoading } = useGetCategoryQuery();

  const isLoadingData = () => {
    if (isLoading) {
      return (
        <div className={loadingStyles.loading}>
          <div className={loadingStyles.spinner}></div>
          <div>Loading...</div>
        </div>
      );
    }

    const { genres } = data;
    return (
      <section className={styles.sidebar}>
        <div className={styles.title}>CATEGORIES</div>
        <nav>
          <ul className={styles.menu}>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <NavLink
                  className={styles.link}
                  to={`/discover/movie?id=${id}`}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.footer}>
          <a href="/help" target="_blank" className={styles.link}>
            Help
          </a>
          <a
            href="/terms"
            target="_blank"
            className={styles.link}
            style={{ textDecoration: 'underline' }}
          >
            Terms & Conditions
          </a>
        </div>
      </section>
    );
  };

  return isLoadingData();
};

export default Sidebar;
