import React, { useContext } from "react";
import SectionTitle from "../common/SectionTitle";
import { useFetch } from "../../hooks/useFetch";
import {
  MOVIES_Top_RATED,
} from "../../utils/utils";
import Loader from "../common/Loader";
import { BookMarkedContext } from "../../context/BookMarkedContext";
import CardSlider from "../common/CardSlider";

const TopRatedMovie = () => {
  const { bookMarkedMovies,  indicateBookedMarkedBtn } =
    useContext(BookMarkedContext);
  const { data: moviesTopRated, loading: moviesTopRatedLoading } =
    useFetch(MOVIES_Top_RATED);
    return (
 
    <section>
<SectionTitle
  className="section-title"
  content="Top Rated Movies"
/>
{moviesTopRatedLoading ? (
  <Loader></Loader>
) : (
  moviesTopRated && (
    <div className="home-slider">
      <CardSlider
        items={moviesTopRated.results}
        className="card"
        bookMarked={bookMarkedMovies}
        indicateBookedMarkedBtn={indicateBookedMarkedBtn}
        media_type="movie"
      ></CardSlider>
    </div>
  )
)}
</section>

  );
};

export default TopRatedMovie;