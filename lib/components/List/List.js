import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice';
import Card from '../Card/Card';
import './List.scss';
const List = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies = '';
  let renderShows = '';
  renderMovies = movies && movies.length > 0 ? movies.map(movie => /*#__PURE__*/React.createElement(Card, {
    key: movie.imdbID,
    data: movie
  })) : /*#__PURE__*/React.createElement("div", {
    className: "movies-error"
  }, /*#__PURE__*/React.createElement("h3", null, "No movies found."));
  renderShows = shows && shows.length > 0 ? shows.map(show => /*#__PURE__*/React.createElement(Card, {
    key: show.imdbID,
    data: show
  })) : /*#__PURE__*/React.createElement("div", {
    className: "shows-error"
  }, ' ', /*#__PURE__*/React.createElement("h3", null, "No shows found."), ' ');
  return /*#__PURE__*/React.createElement("div", {
    className: "movie-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "movie-list"
  }, /*#__PURE__*/React.createElement("h2", null, "Movies"), /*#__PURE__*/React.createElement("div", {
    className: "movie-container"
  }, renderMovies)), /*#__PURE__*/React.createElement("div", {
    className: "show-list"
  }, /*#__PURE__*/React.createElement("h2", null, "Shows"), /*#__PURE__*/React.createElement("div", {
    className: "movie-container"
  }, renderShows), ' '));
};
export default List;