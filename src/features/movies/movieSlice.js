import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../../common/apis/MovieApi';
import APIKey from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
  'movies/fetchAsyncMovies',
  async () => {
    const movieText = 'Harry';
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${movieText}&type=movie`,
    );
    return response.data.Search;
  },
);

export const fetchAsyncShows = createAsyncThunk(
  'movies/fetchAsyncShows',
  async () => {
    const seriesText = 'Friends';
    const response = await movieApi.get(
      `?apikey=${APIKey}&s=${seriesText}&type=series`,
    );
    return response.data.Search;
  },
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  'movies/fetchAsyncMovieOrShowDetail',
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`);
    return response.data;
  },
);

const initialState = {
  movies: {},
  shows: {},
  selectMovieOrShow: {},
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.selectMovieOrShow = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, () => {
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, () => {
      })
      .addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
        state.shows = payload;
      })
      .addCase(fetchAsyncMovieOrShowDetail.fulfilled, (state, { payload }) => {
        state.selectMovieOrShow = payload;
      });
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrshow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
