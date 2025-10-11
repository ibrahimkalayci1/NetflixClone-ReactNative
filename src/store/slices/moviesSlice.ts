import {createSlice} from "@reduxjs/toolkit";
import {MoviesState} from "../../models/data/moviesState";
import { getMovieDetail, getMyList, getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpComingMovies, searchMovie } from "../actions/moviesActions";
import { CATEGORIES } from "../../utils/constants";


const initialState:MoviesState={
    popularMovies:[],
    myList:[],
    searchList:[],
    nowPlayingMovies:[],
    topRatedMovies:[],
    upComingMovies:[],
    pending:false,
    pendingSearch:false,
    error:{},
    selectedCategory:{},
    categories:[
  {
    id:1,
  category:CATEGORIES.NOWPLAYING,
  categoryTitle:"Now Playing"
},
  {
    id:2,
  category:CATEGORIES.POPULAR,
  categoryTitle:"Popular"

},
  {
    id:3,
  category:CATEGORIES.TOPRATED,
  categoryTitle:"Top Rated"

},
  {
    id:4,
  category:CATEGORIES.UPCOMING,
  categoryTitle:"Up Coming"

},
    ],
    movieDetailData:{},
    pendingMovieDetail:false
}

const moviesSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        setCategory :(state,action) => {
            state.selectedCategory = state.categories.find(
                c=> c.category==action.payload,
            )
        },
    },
    extraReducers: (builder) => {
        builder
 .addCase(getPopularMovies.pending,(state) => {
     state.pending = true;
 })
 .addCase(getPopularMovies.fulfilled, (state,action) => {
     state.popularMovies = action.payload ?? [];
     state.pending = false;
 })
 .addCase(getPopularMovies.rejected, (state,action)  => {
     state.pending = false;
     state.error = action.error;
 })
        
 .addCase(getNowPlayingMovies.pending,(state) => {
     state.pending = true;
 })
 .addCase(getNowPlayingMovies.fulfilled, (state,action) => {
     state.nowPlayingMovies = action.payload ?? [];
     state.pending = false;
 })
 .addCase(getNowPlayingMovies.rejected, (state,action)  => {
     state.pending = false;
     state.error = action.error;
 })
        
 .addCase(getTopRatedMovies.pending,(state) => {
     state.pending = true;
 })
 .addCase(getTopRatedMovies.fulfilled, (state,action) => {
     state.topRatedMovies = action.payload ?? [];
     state.pending = false;
 })
 .addCase(getTopRatedMovies.rejected, (state,action)  => {
     state.pending = false;
     state.error = action.error;
 })
        
 .addCase(getUpComingMovies.pending,(state) => {
     state.pending = true;
 })
 .addCase(getUpComingMovies.fulfilled, (state,action) => {
     state.upComingMovies = action.payload ?? [];
     state.pending = false;
 })
 .addCase(getUpComingMovies.rejected, (state,action)  => {
     state.pending = false;
     state.error = action.error;
 })



 .addCase(getMovieDetail.pending,(state) => {
     state.pendingMovieDetail = true;
 })
 .addCase(getMovieDetail.fulfilled, (state,action) => {
     (state.movieDetailData = action.payload),
     (state.pendingMovieDetail = false);
 })
 .addCase(getMovieDetail.rejected, (state,action)  => {
     state.pendingMovieDetail = false;
     state.error = action.error;
 })



 .addCase(searchMovie.pending,(state) => {
     state.pendingSearch = true;
 })
 .addCase(searchMovie.fulfilled, (state,action) => {
     (state.searchList = action.payload),
     (state.pendingSearch = false);
 })
 .addCase(searchMovie.rejected, (state,action)  => {
     state.pendingSearch = false;
     state.error = action.error;
 })





 
 .addCase(getMyList.fulfilled, (state,action) => {
     (state.myList = action.payload);
 })
 
    },
})


export const {setCategory} = moviesSlice.actions
export default moviesSlice.reducer