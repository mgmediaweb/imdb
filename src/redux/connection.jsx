import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../variables';

const createMovieList = (obj) => {
  let result = {};

  obj.items.forEach((item) => {
    result = {
      ...result,
      [item.id]:
      {
        content: item.contentRating,
        director: item.directors,
        genre: item.genreList,
        image: item.image,
        plot: item.plot,
        rating: parseFloat(item.imDbRating),
        runtime: item.runtimeMins,
        stars: item.stars,
        title: item.title,
        year: item.year,
      },
    };
  });

  return result;
};
/*
const createMissionList = (obj) => {
  let result = {};

  obj.forEach((item) => {
    result = {
      ...result,
      [item.mission_id]:
      {
        description: item.description,
        title: item.mission_name,
        member: false,
      },
    };
  });
  return result;
};
*/
export const getMissions = createAsyncThunk(
  'rockets/getMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    console.log(data);
    // return createMissionList(data);
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
    return createMovieList(data);
  },
);
