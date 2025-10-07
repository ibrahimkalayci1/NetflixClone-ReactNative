import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../services/verbs';
import {
  NOW_PLAYING,
  POPULAR_URL,
  TOP_RATED_URL,
  UPCOMING_URL,
} from '../../services/urls';

const getPopularMovies = createAsyncThunk(
  'movies/getPopularMovies',
  async (params: { page: number }) => {
    try {
      const response = await getRequest(POPULAR_URL, params);
      return response.data.results;
    } catch (error) {
      console.log('error', error);
    }
  },
);
const getNowPlayingMovies = createAsyncThunk(
  'movies/getNowPlayingMovies',
  async (params: { page: number }) => {
    try {
      const response = await getRequest(NOW_PLAYING, params);
      return response.data.results;
    } catch (error) {
      console.log('error', error);
    }
  },
);
const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async (params: { page: number }) => {
    try {
      const response = await getRequest(TOP_RATED_URL, params);
      return response.data.results;
    } catch (error) {
      console.log('error', error);
    }
  },
);
const getUpComingMovies = createAsyncThunk(
  'movies/getUpComingMovies',
  async (params: { page: number }) => {
    try {
      const response = await getRequest(UPCOMING_URL, params);
      return response.data.results;
    } catch (error) {
      console.log('error', error);
    }
  },
);
export {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpComingMovies,
};
