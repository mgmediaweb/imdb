import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaStar } from 'react-icons/fa';
import Cast from '../components/cast/Cast';
import api from '../variables';

const TopDetailScreen = () => {
  const { id } = useParams();
  const { movies } = useSelector((state) => state.topMovies);

  const [trailer, setTrailer] = useState(false);
  const [stars, setStars] = useState([]);

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
    setStars(fullcast.actors.slice(0, 10));
  };

  useEffect(() => {
    getTrailer();
    getCast();
  }, []);

  return (
    <>
      <div className="cover">
        <div className="container space-header padding-wide">
          <div className="top-info">
            <div>
              <h1>{ movies[id].title !== undefined ? movies[id].title : '...' }</h1>
              <p className="info">{`${movies[id].year}`}</p>
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

          <p className="hightligts">
            <strong>Stars</strong>
            {movies[id].stars}
          </p>
        </div>
      </div>
      <h3 className="margin-left">Top Cast</h3>
      <Cast data={stars} />
    </>
  );
};

export default TopDetailScreen;
