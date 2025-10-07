import { SerializedError } from "@reduxjs/toolkit";

interface Movie{
    backdrop_path:string,
    id:number,
    title:string,
    poster_path:string,
    overview:string,
    original_title:string,
    original_language:string,
    adult:boolean,
    popularity:number,
    vote_average:number,
    vote_count:number
}

interface Category{
    id?:number,
    category?:string,
    categoryTitle?:string
}

interface MoviesState{
    popularMovies:Movie[];
    nowPlayingMovies:Movie[];
    topRatedMovies:Movie[];
    upComingMovies:Movie[];
    pending:boolean,
    error:SerializedError | null,
    categories:Category[],
    selectedCategory:Category | undefined
}

export type {MoviesState,Movie,Category}