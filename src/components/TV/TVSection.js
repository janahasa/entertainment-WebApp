import React from 'react'
import { isBookMarked} from '../../utils/utils';
import Card from '../common/Card';
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { API_KEY, DETAILS_API } from "../../utils/utils";

const TVSection = ({ tvs, indicateBookedMarkedBtn, bookMarked , className}) => {
    const { id } = useParams();
    const { data: videos } = useFetch(
      `${DETAILS_API}/movie/${id}/videos${API_KEY}`
    );
  return (
    <div className={className}>
      {tvs.map((element) => {
        const {
          id,
          poster_path,
          release_date,
          original_name,
          first_air_date,
        } = element;
        const isBookedMarked = isBookMarked(id, bookMarked);
        
        return (
          <Card
            element={element}
            title={original_name}
            media_type="tv"
            release_date={release_date}
            id={id}
            key={id}
            first_air_date={first_air_date}
            poster_path={poster_path}
            isBookedMarked={isBookedMarked}
            indicateBookedMarkedBtn={indicateBookedMarkedBtn}
            className="card"
            to={`/series/${id}`}
            embedId={videos && videos.results[0].key}
          ></Card>
        );
      })}
    </div>
  );
};

export default TVSection
