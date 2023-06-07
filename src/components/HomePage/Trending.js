import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { useFetch } from "../../hooks/useFetch";
import {
  API_TRENDING_URL,
} from "../../utils/utils";
import TrendingSection from "./TrendingSection";
import Loader from "../../components/common/Loader";
import { BookMarkedContext } from "../../context/BookMarkedContext"; 


const Trending = () => {
  const [displayedTrending, setDisplayedTrending] = useState([]);
  const { data: trending, loading: trendingLoading } =
    useFetch(API_TRENDING_URL);
  const { bookMarkedMovies, bookMarkedTVs, indicateBookedMarkedBtn } =
    useContext(BookMarkedContext);
    useEffect(() => {
      if (trending) {
        setDisplayedTrending(trending.results);
      }
    }, [trending]);

  return (
<main>
<section>
<SectionTitle className="section-title" content="Trending" />
{trendingLoading ? (
  <Loader></Loader>
) : (
  displayedTrending && (
    <TrendingSection
      trending={displayedTrending}
      bookMarkedMovies={bookMarkedMovies}
      bookMarkedTVs={bookMarkedTVs}
      indicateBookedMarkedBtn={indicateBookedMarkedBtn}
    ></TrendingSection>
  )
)}
</section>
</main>
  );
};

export default Trending;