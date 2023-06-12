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

  renderMovies = movies && movies.length > 0 ? (
    movies.map((movie) => <Card key={movie.imdbID} data={movie} />)
  ) : (
    <div className="movies-error">
      <h3>No movies found.</h3>
    </div>
  );

  renderShows = shows && shows.length > 0 ? (
    shows.map((show) => <Card key={show.imdbID} data={show} />)
  ) : (
    <div className="shows-error">
      {' '}
      {/* Changed className to 'shows-error' */}
      <h3>No shows found.</h3>
      {' '}
      {/* Changed text to 'No shows found.' */}
    </div>
  );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
        {' '}
        {/* Changed className to 'show-container' */}
      </div>
    </div>
  );
};

export default List;
