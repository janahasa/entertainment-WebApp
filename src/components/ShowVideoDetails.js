import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShowDetailsSection from "./ShowDetailsSection";
import YoutubeEmbed from "./YoutubeEmbed";
import { useFetch } from "../hooks/useFetch";
import { API_KEY, DETAILS_API, isBookMarked } from "../utils/utils";
import { BookMarkedContext } from "../context/BookMarkedContext";
import Loader from "./common/Loader";

const ShowVideoDetails = () => {
  const { id } = useParams();
  const { data: details, loading: detailsLoading } = useFetch(
    `${DETAILS_API}/movie/${id}${API_KEY}`
  );
  const { data: videos } = useFetch(
    `${DETAILS_API}/movie/${id}/videos${API_KEY}`
  );
  const { data: similarMovies, loading: similarLoading } = useFetch(
    `${DETAILS_API}/movie/${id}/similar${API_KEY}`
  );
  const { bookMarkedMovies, indicateBookedMarkedBtn } =
    useContext(BookMarkedContext);
  const isBookedMark = isBookMarked(details && details.id, bookMarkedMovies);
 console.log(details && details);
 if (details)
   {return (
     <main>
       <div className="container">
         {videos && videos.results.length > 0 && (
           <YoutubeEmbed
             embedId={videos && videos.results[0].key}
             className="video-responsive"
           />
         )}
         <section>
           {details && (
             <ShowDetailsSection
               name={details.original_title}
               year={details.release_date.substring(0, 4)}
               genres={details.genres}
               overview={details.overview}
               runtime={details.runtime}
               mediaType="movie"
               element={details && details}
               poster_path={details.poster_path}
               similar={(similarMovies && similarMovies.results) || []}
               similarLoading={similarLoading}
               indicateBookedMarkedBtn={indicateBookedMarkedBtn}
               bookMarked={bookMarkedMovies}
               isBookMarked={isBookedMark}
               vote_average={details.vote_average}
               vote_count={details.vote_count}
             />
           )}
         </section>
       </div>
     </main>
   );}else{
    return (
      <main>
        <div className="container">
          <div className="loader-wrapper">
            <Loader></Loader>
          </div>
        </div>
      </main>
    );
   }
};

export default ShowVideoDetails;
