import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import api from '../variables';

const DetailScreen = () => {
  const [trailer, setTrailer] = useState(false);
  const { movies } = useSelector((state) => state.inTheaters);
  const { id } = useParams();

  const getTrailer = async () => {
    const response = await fetch(`${api.url}/YouTubeTrailer/${api.key}/${id}`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });

    const data = await response.json();
    setTrailer(`https://www.youtube.com/embed/${data.videoId}`);
  };

  const getCast = async () => {
    const response = await fetch(`${api.url}/FullCast/${api.key}/${id}`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });

    const fullcast = await response.json();
    console.log('data: ', fullcast.actors.slice(0, 5));
    // setTrailer(`https://www.youtube.com/embed/${data.videoId}`);
  };

  useEffect(() => {
    getTrailer();
    getCast();

    // console.log(trailer, cast);
    // return fetchData;
  }, []);

  return (
    <div className="cover">
      <div className="container space-header padding-wide">
        <div className="top-info">
          <div>
            <h1>{ movies[id].title !== undefined ? movies[id].title : '...' }</h1>
            <p className="info">{`${movies[id].year} • ${movies[id].content} • ${movies[id].runtime} min.`}</p>
          </div>
          <div>
            <p className="rating">
              <FaStar className="icon-rating" />
              {movies[id].rating}
            </p>
          </div>
        </div>
        {
          trailer && (
            <iframe
              src={trailer}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="youtube"
            />
          )
        }

        <ul className="genreList">
          {
            movies[id].genre.length && (movies[id].genre.map((item) => (
              <li key={item.value}>{item.value}</li>
            )))
          }
        </ul>

        <p>{movies[id].plot}</p>

        <p className="hightligts">
          <strong>Director</strong>
          {movies[id].director}
        </p>
        <p className="hightligts">
          <strong>Stars</strong>
          {movies[id].stars}
        </p>
      </div>
    </div>
  );
};

export default DetailScreen;
