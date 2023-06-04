import { configureStore } from '@reduxjs/toolkit';

import categoriesSlice from './categories/categoriesSlice';
import trendingMoviesSlice from './trendingMovies/trendingMoviesSlice';
// import { apiMovieSlice } from "./movie/apiMovieSlice";

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    trendingMovies: trendingMoviesSlice,
    // [apiMovieSlice.reducerPath]: apiMovieSlice.reducer,
  },
  // middleware: (getMiddleware) =>
  //   getMiddleware().concat(apiMovieSlice.middleware),
  devTools: true,
});
