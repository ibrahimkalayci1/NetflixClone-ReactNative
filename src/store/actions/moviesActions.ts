import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../services/verbs';
import {
  MOVIE_DETAIL_URL,
  NOW_PLAYING,
  POPULAR_URL,
  SEARCH_MOVIE_URL,
  TOP_RATED_URL,
  UPCOMING_URL,
} from '../../services/urls';

import firestore, { documentId } from '@react-native-firebase/firestore';
import { Collections } from '../../utils/collections';
import { Alert } from 'react-native';

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

const getMovieDetail = createAsyncThunk(
  'movies/getMovieDetail',
  async movieId => {
    try {
      const url = MOVIE_DETAIL_URL + movieId;
      const response = await getRequest(url, {});
      return response.data;
    } catch (error) {
      console.log('error', error);
    }
  },
);

const searchMovie = createAsyncThunk('movies/searchMovie', async params => {
  try {
    const response = await getRequest(SEARCH_MOVIE_URL, params);
    return response.data.results;
  } catch (error) {
    console.log('error', error.response);
  }
});

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

const addMyList = createAsyncThunk(
  'movies/addMyList',
  async (values: object, { rejectWithValue }) => {
    console.log('values', values);
    try {
      const data = await firestore()
        .collection(Collections.MYLISTMOVIE)
        .add(values);

      Alert.alert(
        'Fim Eklendi',
        'Film Başarılı Bir Şekilde Listenize Eklendi',
        [{ text: 'TAMAM', onPress: () => console.log('OK Pressed') }],
      );
    } catch (error: any) {
      console.log('hata', error);
    }
  },
);

const getMyList = createAsyncThunk(
  'movies/getMyList',
  async (userId: string, { rejectWithValue }) => {
    try {
      const data = await firestore()
        .collection(Collections.MYLISTMOVIE)
        .where('userId', '==', userId)
        .get();
      console.log(data.docs);
      const myList = data.docs.map(movie => ({
        documentId: movie.id,
        ...movie.data(),
      }));
      return myList;
    } catch (error: any) {
      rejectWithValue('Beklenmedik bir hata oluştu');
    }
  },
);

export {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpComingMovies,
  getMovieDetail,
  searchMovie,
  addMyList,
  getMyList,
};
