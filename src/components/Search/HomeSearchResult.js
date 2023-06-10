import React from 'react';
import Card from '../common/Card';
import { isBookMarked} from '../../utils/utils';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { API_KEY, DETAILS_API } from '../../utils/utils';

const HomeSearchResult = ({
  result,
  bookMarkedMovies,
  bookMarkedTVs,
  indicateBookedMarkedBtn,
}) => {
  const { id } = useParams();
  const { data: videos } = useFetch(`${DETAILS_API}/movie/${id}/videos${API_KEY}`);

  const renderCard = (element) => {
    const { media_type, id, ...rest } = element;
    const isBookedMarked =
      media_type === 'movie'
        ? isBookMarked(id, bookMarkedMovies)
        : isBookMarked(id, bookMarkedTVs);

    let detailsPageType = '';
    if (media_type === 'movie') {
      detailsPageType = 'movies';
    }
    if (media_type === 'tv') {
      detailsPageType = 'series';
    }

    if (media_type !== 'person') {
      return (
        <Card
          element={element}
          isBookedMarked={isBookedMarked}
          indicateBookedMarkedBtn={indicateBookedMarkedBtn}
          className="card"
          to={`/${detailsPageType}/${id}`}
          {...rest}
        ></Card>
      );
    }
  };

  return <div className="card-container card-container-margin">{result.map(renderCard)}</div>;
};

export default HomeSearchResult;
