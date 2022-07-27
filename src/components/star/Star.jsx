import PropTypes from 'prop-types';
import './Star.scss';

const Star = (props) => {
  const {
    content,
    image,
    name,
  } = props;

  return (
    <div className="star-box">
      <div className="star-image" style={{ backgroundImage: `url(${image})` }} />
      <h5>{name}</h5>
      <p>{content}</p>
    </div>
  );
};

Star.propTypes = {
  content: PropTypes.string,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

Star.defaultProps = {
  content: null,
};

export default Star;
