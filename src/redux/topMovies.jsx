import { createSlice } from '@reduxjs/toolkit';
import { getTopMovies } from './connection';

const initialState = {
  movies: {},
  status: null,
};

const topMoviesSlice = createSlice({
  name: 'topMovies',
  initialState,
  reducers: {
    updateRocket: (state, action) => ({
      ...state,
      movies: {
        ...state.movies,
        [action.payload]: {
          ...state.rockets[action.payload],
          reserved: !state.rockets[action.payload].reserved,
        },
      },
    }),
  },
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

// export const { updateRocket } = rockets.actions;
export default topMoviesSlice.reducer;
