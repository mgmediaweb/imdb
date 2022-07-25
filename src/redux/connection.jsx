import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../variables';

const createMovieList = (obj, qty) => {
  let result = {};

  obj.items.slice(0, qty).forEach((item) => {
    let newContent = null;
    let newDirector = null;
    let newGenre = null;
    let newPlot = null;
    // let newRating = 0.0;
    let newRuntime = null;
    let newStars = null;

    if (item.contentRating) newContent = item.contentRating;
    if (item.directors) newDirector = item.directors;
    if (item.genreList) newGenre = item.genreList;
    if (item.plot) newPlot = item.plot;
    // if (item.imDbRating !== null) newRating = parseFloat(item.imDbRating);
    if (item.runtimeMins) newRuntime = item.runtimeMins;

    if (item.crew) newStars = item.crew;
    else if (item.stars) newStars = item.stars;

    result = {
      ...result,
      [item.id]:
      {
        content: newContent,
        director: newDirector,
        genre: newGenre,
        image: item.image,
        plot: newPlot,
        rating: parseFloat(item.imDbRating),
        runtime: newRuntime,
        stars: newStars,
        title: item.title,
        year: item.year,
      },
    };
  });

  return result;
};

export const getTopMovies = createAsyncThunk(
  'topMovies/get',
  async () => {
    const response = await fetch(`${api.url}/Top250Movies/${api.key}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return createMovieList(data, 15);
  },
);

export const getCurrentMovies = createAsyncThunk(
  'currentMovies/get',
  async () => {
    const response = await fetch(`${api.url}/InTheaters/${api.key}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    // console.log(`${api.url}/InTheaters/${api.key}`);
    const data = await response.json();
    return createMovieList(data, 20);
  },
);

export const getTopStars = createAsyncThunk(
  'topStars/get',
  async () => {
    const response = await fetch('./json/stars.json', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return data;
  },
);
