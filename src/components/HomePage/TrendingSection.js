import React from 'react'
import { isBookMarked} from '../../utils/utils';
import Card from '../common/Card';
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { API_KEY, DETAILS_API } from "../../utils/utils";


function TrendingSection({
  trending,
  bookMarkedMovies,
  bookMarkedTVs,
  indicateBookedMarkedBtn, 
})  

 { 
 const { id } = useParams();
 const { data: videos } = useFetch(
   `${DETAILS_API}/movie/${id}/videos${API_KEY}`
 );
  return (
    
    <ul className="trending-section">
      {trending.map((element) => {
        const {
          id,
          title,
          poster_path,
          release_date,
          original_title,
          original_name,
           media_type,
          first_air_date,
        } = element;
        const isBookedMarked =
          media_type === "movie"
            ? isBookMarked(id, bookMarkedMovies)
            : isBookMarked(id, bookMarkedTVs);

    
        const detailsPageType = media_type === "movie" ? "movies" : "series";
        return (
          <li key={id}>
            <Card
              element={element}
              className="trending-card"
              title={title || original_title || original_name}
              media_type={media_type}
              release_date={release_date}
              id={id}
              first_air_date={first_air_date}
              poster_path={poster_path}
              isBookedMarked={isBookedMarked}
              indicateBookedMarkedBtn={indicateBookedMarkedBtn}
              to={`/${detailsPageType}/${id}`}
              embedId={videos && videos.results[0].key}
            ></Card>
          </li>
        );
      })}
    </ul>
  );
}

export default TrendingSection
