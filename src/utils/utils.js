export const API_TRENDING_URL =
  "https://api.themoviedb.org/3/trending/all/day?api_key=8adc497971eabd24fbe9cb376e4a7cde";
export const API_POPULAR_URL = "";
export const API_IMG = "https://image.tmdb.org/t/p/w500";
export const API_POPULAR_MOVIES =
  "https://api.themoviedb.org/3/movie/popular?api_key=8adc497971eabd24fbe9cb376e4a7cde&language=en&page=";
export const API_POPULAR_TV =
  "https://api.themoviedb.org/3/tv/popular?api_key=8adc497971eabd24fbe9cb376e4a7cde&language=en&page=";

export const SEARCH_MOVIES_API =
  "https://api.themoviedb.org/3/search/movie?api_key=8adc497971eabd24fbe9cb376e4a7cde&language=en-US&page=1&include_adult=false&query=";

  export const SEARCH_TVS_API =
    "https://api.themoviedb.org/3/search/tv?api_key=8adc497971eabd24fbe9cb376e4a7cde&language=en-US&page=1&include_adult=false&query=";
 export const API_KEY = "?api_key=8adc497971eabd24fbe9cb376e4a7cde&language=en-US";
export const DETAILS_API ="https://api.themoviedb.org/3/";
export const TV_Top_RATED =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=8adc497971eabd24fbe9cb376e4a7cde&language=en-US&page=1";
export const TV_LATEST_API =
  "https://api.themoviedb.org/3/tv/airing_today?api_key=8adc497971eabd24fbe9cb376e4a7cde&language=en-US&page=1";
export const MOVIES_Top_RATED =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=8adc497971eabd24fbe9cb376e4a7cde&language=en-US&page=1";
export const MOVIES_LATEST_API =
  "https://api.themoviedb.org/3/movie/now_playing?api_key=8adc497971eabd24fbe9cb376e4a7cde&language=en-US&page=1";
 
export const MULTI_SEARCH_API =
  "https://api.themoviedb.org/3/search/multi?api_key=8adc497971eabd24fbe9cb376e4a7cde&language=en-US&include_adult=false&query=";
  export function isBookMarked(id, bookMarked) {
  let fav = false;
  for (let i = 0; i < bookMarked.length; i++) {
    if (bookMarked[i].id === id) {
      fav = true;
      break;
    }
  }
  return fav;
}
export const deboune = (func, delay) => {
  let timeoutid;
  return function (...args) {
    clearTimeout(timeoutid);
    timeoutid = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
export function toHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { hours, minutes };
}
