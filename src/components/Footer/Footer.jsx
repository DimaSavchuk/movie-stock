import React from 'react';
import { Link } from 'react-router-dom';

import { ROUTER } from '../../utils/routes';
import LOGO from '../../images/logo.svg';

import { FooterStyled, Logo, About } from './Footer.styled';

const Footer = () => {
  return (
    <FooterStyled>
      <Logo>
        <Link to={ROUTER.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </Logo>

      <About>
        Develop by{' '}
        <a
          href="https://github.com/DimaSavchuk"
          target="_blank"
          rel="noreferrer"
        >
          Dima Savchuk
        </a>
      </About>
    </FooterStyled>
  );
};

export default Footer;
