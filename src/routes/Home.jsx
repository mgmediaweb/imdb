import React from 'react';
import { FiWifiOff } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { SpinnerCircularFixed } from 'spinners-react';
import Slider from '../components/slider/Slider';

const HomeScreen = () => {
  const { movies, status: moviesStatus } = useSelector((state) => state.inTheaters);

  const inTheaters = (sts) => {
    switch (sts) {
      case 'success':
        return (<Slider data={movies} />);
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
        { inTheaters(moviesStatus) }
      </section>
    </div>
  );
};

export default HomeScreen;
