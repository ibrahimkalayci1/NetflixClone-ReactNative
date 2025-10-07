import {createSlice} from "@reduxjs/toolkit";
import {MoviesState} from "../../models/data/moviesState";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getUpComingMovies } from "../actions/moviesActions";
import { CATEGORIES } from "../../utils/constants";


const initialState:MoviesState={
    popularMovies:[],
    nowPlayingMovies:[],
    topRatedMovies:[],
    upComingMovies:[],
    pending:false,
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
    ]
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
 });
    },
})


export const {setCategory} = moviesSlice.actions
export default moviesSlice.reducer