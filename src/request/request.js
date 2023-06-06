import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { MovieApi } from './movie/apiMovieSlice';

const reducers = combineReducers({
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
