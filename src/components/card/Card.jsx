import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './Card.scss';

const Card = (props) => {
  const {
    id,
    image,
    rating,
    title,
  } = props;

  return (
    <div className="card">
      <Link to={`/detail/${id}`}>
        <div className="card-image" style={{ backgroundImage: `url(${image})` }} />
      </Link>
      <p className="rating">
        <FaStar className="icon-rating" />
        {rating}
      </p>
      <p>{title}</p>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
};

Card.defaultProps = {
  image: 'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
  rating: 0.0,
};

export default Card;
