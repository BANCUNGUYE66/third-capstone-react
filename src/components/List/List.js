import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import Card from '../Card/Card';
import './List.scss';

const List = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = '';

  renderMovies = movies && movies.length > 0 ? (
    movies.map((movie) => <Card key={movie.imdbID} data={movie} />)
  ) : (
    <div className="movies-error">
      <h3>No movies found.</h3>
    </div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
    </div>
  );
};

export default List;
