import React from "react";
import { Link } from "react-router-dom";

import { ROUTER } from "../../utils/routes";
import LOGO from "../../images/logo.svg";

import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTER.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </div>

      <div className={styles.rights}>
        Develop by{" "}
        <a
          href="https://github.com/DimaSavchuk"
          target="_blank"
          rel="noreferrer"
        >
          Dima Savchuk
        </a>
      </div>

      {/* <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div> */}
    </section>
  );
};

export default Footer;
