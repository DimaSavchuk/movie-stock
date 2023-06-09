import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ROUTER } from '../../utils/routes';

import Home from '../Home/Home';
import Movie from '../Movie/Movie';
import CategoryMovies from 'components/CategoryMovies/CategoryMovies';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTER.HOME} element={<Home />} />
      <Route path={ROUTER.MOVIE} element={<Movie />} />
      <Route path={ROUTER.CATEGORYMOVIES} element={<CategoryMovies />} />
    </Routes>
  );
};

export default AppRoutes;
