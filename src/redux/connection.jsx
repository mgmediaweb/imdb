import { createAsyncThunk } from '@reduxjs/toolkit';

const createRocketList = (obj) => {
  let result = {};

  obj.forEach((item) => {
    result = {
      ...result,
      [item.id]:
      {
        description: item.description,
        imagen: item.flickr_images[0],
        reserved: false,
        title: item.rocket_name,
      },
    };
  });

  return result;
};

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
    return createMissionList(data);
  },
);

export const getRockets = createAsyncThunk(
  'rockets/getRockets',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/rockets', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    return createRocketList(data);
  },
);
