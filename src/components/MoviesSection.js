import React, { useContext } from 'react'
import Card from './Card';
import trendingCardImage from "../assets/small.jpg";
import { isBookMarked } from '../utils/utils';
import { BookMarkedContext } from '../context/BookMarkedContext';


const MoviesSection = ({ movies, indicateBookedMarkedBtn, bookMarked ,className}) => {
  return (
    <div className={className}>
      {movies.map((element) => {
        const {
          backdrop_path,
          id,
          title,
          poster_path,
          release_date,
          original_title,
          first_air_date,
        } = element;
        const isBookedMarked = isBookMarked(id, bookMarked);
        return (
          <Card
            backdrop_path={backdrop_path}
            element={element}
            title={title || original_title}
            media_type="movie"
            release_date={release_date}
            id={id}
            key={id}
            first_air_date={first_air_date}
            poster_path={poster_path}
            isBookedMarked={isBookedMarked}
            indicateBookedMarkedBtn={indicateBookedMarkedBtn}
            className="card"
            to={`/movies/${id}`}
          ></Card>
        );
      })}
    </div>
  );
};

export default MoviesSection
