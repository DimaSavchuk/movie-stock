import React from 'react';

import Loading from 'components/Loading/Loading';

import {
  HeroStyled,
  Title,
  About,
  Text,
  Subtitle,
  Slogan,
} from './Hero.styled';

const Hero = ({ results, isLoading }) => {
  const randomIndex = Math.floor(Math.random() * 20);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <HeroStyled
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${results[randomIndex].backdrop_path})`,
          }}
        >
          <Title>Film Lover's</Title>
          <About>
            <Text>
              <Subtitle>Where Cinematic Dreams Come to Life</Subtitle>
              <Slogan>
                Discover, Explore, and Experience the Magic of Movies
              </Slogan>
            </Text>
          </About>
        </HeroStyled>
      )}
    </>
  );
};

export default Hero;
