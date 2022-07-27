import { createSlice } from '@reduxjs/toolkit';
import { getCurrentMovies } from './connection';

const initialState = {
  movies: {},
  status: null,
};

const currentMoviesSlice = createSlice({
  name: 'currentMovies',
  initialState,
  reducers: {},
  extraReducers: {
    [getCurrentMovies.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getCurrentMovies.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      movies: action.payload,
    }),
    [getCurrentMovies.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export const { makeGenreSelector } = currentMoviesSlice.actions;
export default currentMoviesSlice.reducer;
