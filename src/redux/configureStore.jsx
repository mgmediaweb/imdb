import { configureStore } from '@reduxjs/toolkit';
import topMoviesSlice from './topMovies';
import currentMoviesSlice from './currentMovies';
import topStars from './topStars';

const reducer = {
  topMovies: topMoviesSlice,
  inTheaters: currentMoviesSlice,
  topStars,
};

const store = configureStore({
  reducer,
});

export default store;
