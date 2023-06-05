import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from '../../styles/Sidebar.module.css';
import { getCetegories } from '../../request/categories/categoriesSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    dispatch(getCetegories())
      .then(response => {
        setGenres(response.payload.genres);
      })
      .catch(error => console.log(error));
  }, [dispatch]);

  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {genres.map(({ id, name }) => (
            <li key={id}>
              <NavLink className={styles.link} to={`/discover/movie?id=${id}`}>
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

export default Sidebar;
