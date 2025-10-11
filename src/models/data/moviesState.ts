import { SerializedError } from "@reduxjs/toolkit";

interface Company{
    logo_path:string,
    name:string,
    id:number,
    origin_country:string
}


interface Movie{
    backdrop_path?:string;
    id?:number;
    title?:string;
    poster_path?:string;
    overview?:string;
    original_title?:string;
    original_language?:string;
    adult?:boolean;
    popularity?:number;
    vote_average?:number;
    vote_count?:number;
    tagline?:string;
    production_companies?:Company[];
    release_date?:string;
}

interface Category{
    id?:number,
    category?:string,
    categoryTitle?:string
}

interface MoviesState{
    popularMovies:Movie[];
    myList:Movie[];
    searchList:Movie[];
    nowPlayingMovies:Movie[];
    topRatedMovies:Movie[];
    upComingMovies:Movie[];
    pending:boolean,
    error:SerializedError | null,
    categories:Category[],
    selectedCategory:Category | undefined,
    movieDetailData:Movie,
    pendingMovieDetail:boolean;
    pendingSearch:boolean
}

export type {MoviesState,Movie,Category}