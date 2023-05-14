import React from 'react'
import { isBookMarked } from '../utils/utils';
import Card from './Card';

const HomeSearchResult = ({
  result,
  bookMarkedMovies,
  bookMarkedTVs,
  indicateBookedMarkedBtn,
}) => {
  return (
    <div className="card-container card-container-margin">
      {result.map((element) => {
        const {
          backdrop_path,
          id,
          title,
          poster_path,
          release_date,
          original_title,
          first_air_date,
          media_type,
          name,
        } = element;
         const isBookedMarked =
           media_type == "movie"
             ? isBookMarked(id, bookMarkedMovies)
             : isBookMarked(id, bookMarkedTVs);
             let detailsPageType =""
          if (media_type == "movie"){
            detailsPageType = "movies";
          }
          if (media_type == "tv"){
             detailsPageType = "series";
          }
            if (media_type != "person") {
              return (
                <Card
                  backdrop_path={backdrop_path}
                  element={element}
                  title={title || original_title || name}
                  media_type={media_type}
                  release_date={release_date}
                  id={id}
                  key={id}
                  first_air_date={first_air_date}
                  poster_path={poster_path}
                  isBookedMarked={isBookedMarked}
                  indicateBookedMarkedBtn={indicateBookedMarkedBtn}
                  className="card"
                  to={`/${detailsPageType}/${id}`}
                ></Card>
              );
            }
      })}
    </div>
  );
};

export default HomeSearchResult
