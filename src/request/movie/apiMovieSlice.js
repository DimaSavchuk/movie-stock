import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY } from '../../utils/constants';

export const MovieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Movie'],
  endpoints: builder => ({
    getMovie: builder.query({
      query: ({ id }) => `/movie/${id}?api_key=${API_KEY}`,
    }),
    getCategoryMovies: builder.query({
      query: ({ name }) =>
        `/search/collection?query=${name}&api_key=${API_KEY}`,
    }),
  }),
});

export const { useGetMovieQuery, useGetCategoryMoviesQuery } = MovieApi;
