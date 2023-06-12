import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faThumbsUp,
  faFilm,
  faCalendar,
} from '@fortawesome/free-solid-svg-icons';
import {
  fetchAsyncMovieOrShowDetail,
  getSelectedMovieOrshow,
  removeSelectedMovieOrShow,
} from '../../features/movies/movieSlice';
import './Detail.scss';

const Detail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrshow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB
                {' '}
                <FontAwesomeIcon className="fa-star" icon={faStar} />
                :
                {' '}
                {data.imdbRating}
              </span>
              <span>
                IMDB
                {' '}
                <FontAwesomeIcon className="fa-thumbs-up" icon={faThumbsUp} />
                :
                {' '}
                {data.imdbVotes}
              </span>
              <span>
                Runtime
                {' '}
                <FontAwesomeIcon className="fa-film" icon={faFilm} />
                :
                {' '}
                {data.Runtime}
              </span>
              <span>
                Year
                {' '}
                <FontAwesomeIcon className="fa-calendar" icon={faCalendar} />
                :
                {' '}
                {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
