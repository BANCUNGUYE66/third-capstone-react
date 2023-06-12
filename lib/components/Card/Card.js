import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Card.scss';
const Card = props => {
  const {
    data
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "card-item"
  }, /*#__PURE__*/React.createElement(Link, {
    to: `/detail/${data.imdbID}`
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-top"
  }, /*#__PURE__*/React.createElement("img", {
    src: data.Poster,
    alt: data.Title
  })), /*#__PURE__*/React.createElement("div", {
    className: "card-bottom"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-info"
  }, /*#__PURE__*/React.createElement("h4", null, data.Title), /*#__PURE__*/React.createElement("p", null, data.Year))))));
};
Card.propTypes = {
  data: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    // Added data.imdbID to props validation
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired
  }).isRequired
};
export default Card;