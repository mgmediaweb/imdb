import { createSlice } from '@reduxjs/toolkit';
import { getTopMovies } from './connection';

const initialState = {
  movies: {},
  status: null,
};

const topMoviesSlice = createSlice({
  name: 'topMovies',
  initialState,
  reducers: {},
  extraReducers: {
    [getTopMovies.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getTopMovies.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      movies: action.payload,
    }),
    [getTopMovies.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export default topMoviesSlice.reducer;
