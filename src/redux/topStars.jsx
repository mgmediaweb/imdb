import { createSlice } from '@reduxjs/toolkit';
import { getTopStars } from './connection';

const initialState = {
  stars: [],
  status: null,
};

const topStarsSlice = createSlice({
  name: 'topStars',
  initialState,
  extraReducers: {
    [getTopStars.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getTopStars.fulfilled]: (state, action) => ({
      ...state,
      status: 'success',
      stars: action.payload,
    }),
    [getTopStars.rejected]: (state) => ({
      ...state,
      status: 'failed',
    }),
  },
});

export default topStarsSlice.reducer;
