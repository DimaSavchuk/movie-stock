import React from 'react';

import Hero from '../Hero/Hero';
import TrendingMovies from '../TrendingMovies/TrendingMovies';

const Home = () => {
  return (
    <>
      <Hero />
      <TrendingMovies title="Trending NOW" />
    </>
  );
};

export default Home;
