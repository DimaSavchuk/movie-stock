import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTER } from '../../utils/routes';
import LOGO from '../../images/logo.svg';
import AVATAR from '../../images/user.png';

import styles from '../../styles/Header.module.css';
import { useGetSearchQuery } from 'request/movie/apiMovieSlice';

const Header = () => {
  const [searchValue, setSarchValue] = useState('');

  const handleSearch = ({ target: { value } }) => {
    setSarchValue(value);
  };

  const { data, isLoading } = useGetSearchQuery({ query: searchValue });

  const { results } = data || {};

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTER.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={styles.username}>Guest</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className="icon">
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type="search"
              name="search"
              placeholder="Search..."
              autoComplete="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </div>

          {searchValue && (
            <div className={styles.box}>
              {isLoading
                ? 'Loading...'
                : !results.length
                ? 'No results'
                : results.map(({ title, poster_path, id }) => (
                    <Link
                      key={id}
                      to={`/movie?id=${id}`}
                      className={styles.item}
                    >
                      <div
                        className={styles.image}
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
                        }}
                      />
                      <div className={styles.title}>{title}</div>
                    </Link>
                  ))}
            </div>
          )}
        </form>

        <div className={styles.account}>
          <Link to={ROUTER.CART} className={styles.cart}>
            <svg className={styles['icon-fav']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>

            <span className={styles.count}>0</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
