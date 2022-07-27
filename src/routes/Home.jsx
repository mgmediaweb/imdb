import React, { useEffect, useState } from 'react';
import { FiWifiOff } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { SpinnerCircularFixed } from 'spinners-react';
import Slider from '../components/slider/Slider';
import Cast from '../components/cast/Cast';

const HomeScreen = () => {
  const { movies: inTheaters, status: moviesStatus } = useSelector((state) => state.inTheaters);
  const { movies: topMovies, status: topMoviesStatus } = useSelector((state) => state.topMovies);
  const { stars } = useSelector((state) => state.topStars);
  const [moviesShow, setMoviesShow] = useState({});
  const [genres, setGenres] = useState({});

  let genreSelector = {};

  const filterMovies = (event) => {
    if (event.target.value !== '') {
      Object.keys(inTheaters).forEach((item) => {
        inTheaters[item].genre.forEach((element) => {
          if (element.value === event.target.value) genreSelector[item] = inTheaters[item];
        });
      });
      setMoviesShow(genreSelector);
    } else {
      setMoviesShow(inTheaters);
    }
  };

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

  const makeGenreSelector = () => {
    genreSelector = {};

    Object.keys(inTheaters).forEach((element) => {
      const tempData = inTheaters[element].genre;

      tempData.forEach((genre) => {
        if (genreSelector[genre.value]) {
          genreSelector[genre.value] += 1;
        } else {
          genreSelector[genre.value] = 1;
        }
      });
    });
    setGenres(genreSelector);
  };

  useEffect(() => {
    setMoviesShow(inTheaters);
  }, [inTheaters]);

  useEffect(() => {
    makeGenreSelector();
  }, []);

  return (
    <div className="container space-header">
      <section>
        <h3>Movies in Theaters</h3>
        {
          Object.keys(genres).length ? (
            <select className="selector" onChange={filterMovies}>
              <option value="">Select a Genre</option>
              {
                Object.keys(genres).map((genre) => (
                  <option
                    value={genre}
                    key={genre}
                  >
                    {`${genre} (${genres[genre]})`}
                  </option>
                ))
              }
            </select>
          ) : ('')
        }

        { moviesList(moviesStatus, moviesShow, 'theaters') }
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
