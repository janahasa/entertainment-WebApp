import React from 'react';
import Card from '../common/Card';
import { isBookMarked } from '../../utils/utils';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { API_KEY, DETAILS_API } from '../../utils/utils';

const MoviesSection = ({ movies, indicateBookedMarkedBtn, bookMarked, className }) => {
  const { id } = useParams();
  const { data: videos } = useFetch(`${DETAILS_API}/movie/${id}/videos${API_KEY}`);

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
            embedId={videos && videos.results[0].key}
            key={id}
          />
        );
      })}
    </div>
  );
};

export default MoviesSection;
