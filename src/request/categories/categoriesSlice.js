import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export const getCetegories = createAsyncThunk(
  'categories/getCetegories',
  async (_, thankAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
        params: { language: 'en' },
        headers: {
          accept: 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDMxOTU5ZmE2MjY1ZjYzMmFmNDYzNWQ5YjQxYThiMiIsInN1YiI6IjY0Nzg4ZWUzMDc2Y2U4MDEwNzliOGI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pmp3ofXekmAIvbSLpvZgFO2iFpU5oouPhK92tJLJ4Nw',
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
      return thankAPI.rejectWithValue(error);
    }
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    genres: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCetegories.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCetegories.fulfilled, (state, action) => {
        state.loading = false;
        state.genres = action.payload;
      })
      .addCase(getCetegories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
