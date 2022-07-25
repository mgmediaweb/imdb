import React from 'react';
import { FiWifiOff } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { SpinnerCircularFixed } from 'spinners-react';
import Slider from '../components/slider/Slider';
import Cast from '../components/cast/Cast';

const HomeScreen = () => {
  const { movies: inTheaters, status: moviesStatus } = useSelector((state) => state.inTheaters);
  const { movies: topMovies, status: topMoviesStatus } = useSelector((state) => state.topMovies);
  const { stars } = useSelector((state) => state.topStars);

  const moviesList = (status, movies, type) => {
    switch (status) {
      case 'success':
        return (<Slider data={movies} type={type} />);
      case 'failed':
        return (
          <div className="slider-win">
            <FiWifiOff className="icon-big color-grey" />
          </div>
        );
      default:
        return (
          <div className="slider-win">
            <SpinnerCircularFixed color="silver" secondaryColor="black" />
          </div>
        );
    }
  };

  return (
    <div className="container space-header">
      <section>
        <h3>Movies in Theaters</h3>
        { moviesList(moviesStatus, inTheaters, 'theaters') }
      </section>

      <section>
        <h3>Top Movies</h3>
        { moviesList(topMoviesStatus, topMovies, 'top') }
      </section>

      {
        stars.length && (
          <>
            <h3 className="margin-left">Top Stars</h3>
            <Cast data={stars} />
          </>
        )
      }

    </div>
  );
};

export default HomeScreen;
