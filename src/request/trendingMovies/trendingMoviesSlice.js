import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export const getTrendingMovies = createAsyncThunk(
  'trendingMovies/getTrendingMovies',
  async () => {
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
      params: { language: 'en-US' },
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDMxOTU5ZmE2MjY1ZjYzMmFmNDYzNWQ5YjQxYThiMiIsInN1YiI6IjY0Nzg4ZWUzMDc2Y2U4MDEwNzliOGI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pmp3ofXekmAIvbSLpvZgFO2iFpU5oouPhK92tJLJ4Nw',
      },
    });
    return response.data;
  }
);

const trendingMoviesSlice = createSlice({
  name: 'trendingMovies',
  initialState: {
    loading: false,
    error: null,
    trendingMovies: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTrendingMovies.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTrendingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload;
      })
      .addCase(getTrendingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default trendingMoviesSlice.reducer;
