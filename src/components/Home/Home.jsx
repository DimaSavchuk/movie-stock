import React from 'react';

import Hero from '../Hero/Hero';
import TrendingMovies from '../TrendingMovies/TrendingMovies';
import { useGetTrendingMoviesQuery } from 'request/movie/apiMovieSlice';

const Home = () => {
  const { data, isLoading } = useGetTrendingMoviesQuery();

  const { results } = data || {};
  return (
    <>
      <Hero results={results} isLoading={isLoading} />
      <TrendingMovies title="Trending NOW" />
    </>
  );
};

export default Home;
