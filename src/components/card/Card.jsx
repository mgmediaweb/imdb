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
    type,
  } = props;

  let link = 'detail';

  if (type === 'top') link = 'topdetail';

  return (
    <div className="card">
      <Link to={`/${link}/${id}`}>
        <div className="card-image" style={{ backgroundImage: `url(${image})` }} />
      </Link>
      <p className="rating">
        <FaStar className="icon-rating" />
        {rating !== null ? rating : '0.0'}
      </p>
      <p>{title}</p>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  rating: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

Card.defaultProps = {
  image: 'https://imdb-api.com/images/128x176/nopicture.jpg',
};

export default Card;
