import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, API_KEY } from '../../utils/constants';
import { buildUrl } from 'utils/common';

export const MovieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Movie'],
  endpoints: builder => ({
    getCategory: builder.query({
      query: () => `/genre/movie/list?api_key=${API_KEY}`,
    }),
    getTrendingMovies: builder.query({
      query: () => `/trending/movie/day?api_key=${API_KEY}`,
    }),
    getMovie: builder.query({
      query: ({ id }) => `/movie/${id}?api_key=${API_KEY}`,
    }),
    getCategoryMovies: builder.query({
      query: ({ id }) => `/discover/movie?with_genres=${id}&api_key=${API_KEY}`,
    }),
    getSearch: builder.query({
      query: params =>
        buildUrl(`search/movie?api_key=${API_KEY}&language=en-US`, params),
    }),
    getVideo: builder.query({
      query: ({ id }) => `/movie/${id}/videos?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetCategoryQuery,
  useGetTrendingMoviesQuery,
  useGetMovieQuery,
  useGetCategoryMoviesQuery,
  useGetSearchQuery,
  useGetVideoQuery,
} = MovieApi;
