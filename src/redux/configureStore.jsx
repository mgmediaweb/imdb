import { configureStore } from '@reduxjs/toolkit';
import currentMoviesSlice from './currentMovies';
// import rockets from './rockets/rockets';

const reducer = {
  inTheaters: currentMoviesSlice,
};

const store = configureStore({
  reducer,
});

export default store;
