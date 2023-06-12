import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTER } from '../../utils/routes';
import LOGO from '../../images/logo.svg';

import { useGetSearchQuery } from 'request/movie/apiMovieSlice';

import {
  HeaderStyled,
  Logo,
  Info,
  Form,
  Icon,
  Svg,
  FormInput,
  Input,
  Box,
  Item,
  Image,
  Title,
} from './Header.styled';

const Header = () => {
  const [searchValue, setSarchValue] = useState('');

  const handleSearch = ({ target: { value } }) => {
    setSarchValue(value);
  };

  const { data, isLoading } = useGetSearchQuery({ query: searchValue });

  const { results } = data || {};

  const closeBox = () => {
    setSarchValue('');
  };

  return (
    <HeaderStyled>
      <Logo>
        <Link to={ROUTER.HOME}>
          <img src={LOGO} alt="logo" />
        </Link>
      </Logo>
      <Info>
        <Form>
          <Icon>
            <Svg>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </Svg>
          </Icon>
          <FormInput>
            <Input
              type="search"
              name="search"
              placeholder="Search..."
              autoComplete="off"
              onChange={handleSearch}
              value={searchValue}
            />
          </FormInput>

          {searchValue && (
            <Box>
              {isLoading
                ? 'Loading...'
                : !results.length
                ? 'No results'
                : results.map(({ title, poster_path, id }) => (
                    <Item key={id} to={`/movie?id=${id}`} onClick={closeBox}>
                      <Image
                        style={{
                          backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
                        }}
                      />
                      <Title>{title}</Title>
                    </Item>
                  ))}
            </Box>
          )}
        </Form>
      </Info>
    </HeaderStyled>
  );
};

export default Header;
