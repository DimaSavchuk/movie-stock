// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { BASE_URL } from "../../utils/constants";

// export const getMovie = createAsyncThunk("movie/getMovie", async (movieId) => {
//   const response = await axios.get(`${BASE_URL}/find/${movieId}`, {
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDMxOTU5ZmE2MjY1ZjYzMmFmNDYzNWQ5YjQxYThiMiIsInN1YiI6IjY0Nzg4ZWUzMDc2Y2U4MDEwNzliOGI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pmp3ofXekmAIvbSLpvZgFO2iFpU5oouPhK92tJLJ4Nw",
//     },
//   });
//   console.log(response.data);
//   return response.data;
// });

// const moviesSlice = createSlice({
//   name: "movie",
//   initialState: {
//     data: null,
//     error: null,
//     loading: false,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getMovie.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getMovie.fulfilled, (state, action) => {
//         state.loading = false;
//         state.genres = action.payload;
//       })
//       .addCase(getMovie.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default moviesSlice.reducer;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constants";

export const apiMovieSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Movie"],
  endpoints: (builder) => ({
    getMovie: builder.query({
      query: ({ id }) => `/movie/${id}`,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDMxOTU5ZmE2MjY1ZjYzMmFmNDYzNWQ5YjQxYThiMiIsInN1YiI6IjY0Nzg4ZWUzMDc2Y2U4MDEwNzliOGI4OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pmp3ofXekmAIvbSLpvZgFO2iFpU5oouPhK92tJLJ4Nw",
      },
      providesTags: ["Movie"],
    }),
  }),
});
console.log(apiMovieSlice);
export const { useGetMovieQuery } = apiMovieSlice;
