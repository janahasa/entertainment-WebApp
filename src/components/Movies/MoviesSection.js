import React from 'react';
import Card from '../common/Card';
import { isBookMarked } from '../../utils/utils';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { API_KEY, DETAILS_API } from '../../utils/utils';

const MoviesSection = ({ movies, indicateBookedMarkedBtn, bookMarked, className }) => {


  return (
    <div className={className}>
      {movies.map((element) => {
        const { id, ...rest } = element;
        const isBookedMarked = isBookMarked(id, bookMarked);

        return (
          <Card
            element={element}
            isBookedMarked={isBookedMarked}
            indicateBookedMarkedBtn={indicateBookedMarkedBtn}
            className="card"
            to={`/movies/${id}`}
            {...rest}
            key={id}
            id={id}
           
          />
        );
      })}
    </div>
  );
};

export default MoviesSection;
