import {Dimensions} from "react-native"
import { TAB } from "./routes";


const API_KEY = "0ccf3dd29a95f67aa9e769f542b72069";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwY2NmM2RkMjlhOTVmNjdhYTllNzY5ZjU0MmI3MjA2OSIsIm5iZiI6MTcyMDM3MzQ5Ny40OTYsInN1YiI6IjY2OGFkMGY5MjAxNzdhMmI2ZTlmMWM5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N23g65E0UhSlw8PRVkXXNchbyoO6ncTiaqI53lbbqkU"

const CATEGORIES = {
  POPULAR: "popular",
  TOPRATED: "topRated",
  NOWPLAYING: "nowPlaying",
  UPCOMING: "upComing",
} as const;



const screenWidth= Dimensions.get("screen").width
const screenHeight= Dimensions.get("screen").height

const linking  = {
  prefixes: ["https://www.netflix.com", "netflix://"],
  config: {
    initialRouteName:TAB,
    screens:{
      "Movie Detail": {
     path:   "movie/:movieId"
      }
      
    },
  },
};

export { API_KEY, token, CATEGORIES ,screenWidth,screenHeight,linking}
