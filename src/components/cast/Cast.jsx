import PropTypes from 'prop-types';
import Star from '../star/Star';

import './Cast.scss';

const Cast = (props) => {
  const { data } = props;

  return (
    <div className="cast-list">
      {
        data.map((item) => (
          <Star
            content={item.asCharacter}
            image={item.image}
            key={item.id}
            name={item.name}
          />
        ))
      }
    </div>
  );
};

Cast.propTypes = {
  data: PropTypes.objectOf.isRequired,
};

export default Cast;
