import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import List from '../List/List';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "banner-img"
  }), /*#__PURE__*/React.createElement(List, null));
};
export default Home;