import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import List from '../List/List';
import movieApi from '../../common/apis/MovieApi';
import APIKey from '../../common/apis/MovieApiKey';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {
  const movieText = 'Harry';
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await movieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`);
        dispatch(addMovies(response.data.Search));
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchMovies();
  }, [dispatch, movieText]);

  return (
    <div>
      <div className="banner-img" />
      <List />
    </div>
  );
};

export default Home;
