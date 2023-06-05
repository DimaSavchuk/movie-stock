import { combineReducers, configureStore } from '@reduxjs/toolkit';

import categoriesSlice from './categories/categoriesSlice';
import trendingMoviesSlice from './trendingMovies/trendingMoviesSlice';
import { MovieApi } from './movie/apiMovieSlice';

const reducers = combineReducers({
  categories: categoriesSlice,
  trendingMovies: trendingMoviesSlice,
  [MovieApi.reducerPath]: MovieApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
    }).concat(MovieApi.middleware),
  devTools: true,
});
