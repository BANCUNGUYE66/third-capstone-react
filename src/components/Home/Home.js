import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import List from '../List/List';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img" />
      <List />
    </div>
  );
};

export default Home;
