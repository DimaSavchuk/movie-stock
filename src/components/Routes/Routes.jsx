import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTER } from "../../utils/routes";

import Home from "../Home/Home";
import Movie from "../TrendingMovies/Movie";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTER.MOVIE} element={<Movie />} />
    </Routes>
  );
};

export default AppRoutes;
