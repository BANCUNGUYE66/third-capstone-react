import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faThumbsUp, faFilm, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { fetchAsyncMovieOrShowDetail, getSelectedMovieOrshow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import './Detail.scss';
const Detail = () => {
  const {
    imdbID
  } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrshow);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);
  return /*#__PURE__*/React.createElement("div", {
    className: "movie-section"
  }, Object.keys(data).length === 0 ? /*#__PURE__*/React.createElement("div", null, "...Loading") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "section-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "movie-title"
  }, data.Title), /*#__PURE__*/React.createElement("div", {
    className: "movie-rating"
  }, /*#__PURE__*/React.createElement("span", null, "IMDB", ' ', /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "fa-star",
    icon: faStar
  }), ":", ' ', data.imdbRating), /*#__PURE__*/React.createElement("span", null, "IMDB", ' ', /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "fa-thumbs-up",
    icon: faThumbsUp
  }), ":", ' ', data.imdbVotes), /*#__PURE__*/React.createElement("span", null, "Runtime", ' ', /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "fa-film",
    icon: faFilm
  }), ":", ' ', data.Runtime), /*#__PURE__*/React.createElement("span", null, "Year", ' ', /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    className: "fa-calendar",
    icon: faCalendar
  }), ":", ' ', data.Year)), /*#__PURE__*/React.createElement("div", {
    className: "movie-plot"
  }, data.Plot), /*#__PURE__*/React.createElement("div", {
    className: "movie-info"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Director"), /*#__PURE__*/React.createElement("span", null, data.Director)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Stars"), /*#__PURE__*/React.createElement("span", null, data.Actors)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Genres"), /*#__PURE__*/React.createElement("span", null, data.Genre)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Languages"), /*#__PURE__*/React.createElement("span", null, data.Language)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Awards"), /*#__PURE__*/React.createElement("span", null, data.Awards)))), /*#__PURE__*/React.createElement("div", {
    className: "section-right"
  }, /*#__PURE__*/React.createElement("img", {
    src: data.Poster,
    alt: data.Title
  }))));
};
export default Detail;