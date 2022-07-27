import PropTypes from 'prop-types';
import Card from '../card/Card';
import './Slider.scss';

const Slider = (props) => {
  const { data, type } = props;
  const movieList = Object.keys(data);

  return (
    <div className="slider">
      {
        movieList.length ? movieList.map((item) => (
          <Card
            id={item}
            image={data[item].image}
            key={item}
            rating={data[item].rating}
            title={data[item].title}
            type={type}
          />
        )) : <div className="no-items">No items availables</div>
      }
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.objectOf.isRequired,
  type: PropTypes.string.isRequired,
};

export default Slider;
