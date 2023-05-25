import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <Link to={`/detail/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    imdbID: PropTypes.string.isRequired, // Added data.imdbID to props validation
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;
